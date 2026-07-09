import { ConfigService } from '@nestjs/config';
export declare class EncryptionService {
    private readonly configService;
    private readonly ALGORITHM;
    private readonly IV_LENGTH;
    private readonly KEY_LENGTH;
    private readonly key;
    constructor(configService: ConfigService);
    encrypt(plaintext: string): string;
    decrypt(payload: string): string;
}
