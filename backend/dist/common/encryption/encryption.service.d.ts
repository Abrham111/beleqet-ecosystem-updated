import { ConfigService } from '@nestjs/config';
export declare class EncryptionService {
    private readonly configService;
    private readonly ALGORITHM;
    private readonly IV_LENGTH;
    private readonly KEY_LENGTH;
    constructor(configService: ConfigService);
    private getEncryptionKey;
    encrypt(plaintext: string): string;
    decrypt(payload: string): string;
}
