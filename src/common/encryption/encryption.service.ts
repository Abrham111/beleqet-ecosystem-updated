import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';

@Injectable()
export class EncryptionService {
  private readonly ALGORITHM = 'aes-256-gcm';
  private readonly IV_LENGTH = 12;
  private readonly KEY_LENGTH = 32;
  private readonly key: Buffer;

  constructor(private readonly configService: ConfigService) {
    const key = this.configService.get<string>('ENCRYPTION_KEY');

    if (!key) {
      throw new InternalServerErrorException(
        'ENCRYPTION_KEY is not configured.',
      );
    }

    // ENCRYPTION_KEY should be a 64-character hex string (32 bytes)
    this.key = Buffer.from(key, 'hex');

    if (this.key.length !== this.KEY_LENGTH) {
      throw new InternalServerErrorException(
        'ENCRYPTION_KEY must be exactly 32 bytes.',
      );
    }
  }

  /**
   * Encrypts plaintext using AES-256-GCM.
   *
   * The returned value is stored in the database as:
   * iv:authTag:ciphertext
   *
   * @param plaintext Plain message.
   * @returns Serialized encrypted payload.
   */

  encrypt(plaintext: string): string {
    try {

      if (!plaintext || !plaintext.trim()) {
        throw new InternalServerErrorException(
          'Plaintext cannot be empty.',
        );
      }

      const iv = crypto.randomBytes(this.IV_LENGTH);

      const cipher = crypto.createCipheriv(
        this.ALGORITHM,
        this.key,
        iv,
      );

      const encrypted = Buffer.concat([
        cipher.update(plaintext, 'utf8'),
        cipher.final(),
      ]);

      const authTag = cipher.getAuthTag();

      return [
        iv.toString('hex'),
        authTag.toString('hex'),
        encrypted.toString('hex'),
      ].join(':');

    }
    catch (error) {
      throw new InternalServerErrorException(
        'Message encryption failed.',
      );
    }
  }

  /**
   * Decrypts a previously encrypted payload.
   *
   * @param payload Serialized encrypted payload.
   * @returns Original plaintext.
   */
  decrypt(payload: string): string {
    try {
      const parts = payload.split(':');

      if (parts.length !== 3) {
        throw new Error('Invalid encrypted payload.');
      }

      const [ivHex, authTagHex, encryptedHex] = parts;

      // const [ivHex, authTagHex, encryptedHex] = payload.split(':');

      const decipher = crypto.createDecipheriv(
        this.ALGORITHM,
        this.key,
        Buffer.from(ivHex, 'hex'),
      );

      decipher.setAuthTag(Buffer.from(authTagHex, 'hex'));

      const decrypted = Buffer.concat([
        decipher.update(Buffer.from(encryptedHex, 'hex')),
        decipher.final(),
      ]);

      return decrypted.toString('utf8');

    }
    catch (error) {
      throw new InternalServerErrorException(
        'Message decryption failed.',
      );
    }
  }
}