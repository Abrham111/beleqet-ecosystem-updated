"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto = require("crypto");
let EncryptionService = class EncryptionService {
    constructor(configService) {
        this.configService = configService;
        this.ALGORITHM = 'aes-256-gcm';
        this.IV_LENGTH = 12;
        this.KEY_LENGTH = 32;
    }
    getEncryptionKey() {
        const key = this.configService.get('ENCRYPTION_KEY');
        if (!key) {
            throw new common_1.InternalServerErrorException('ENCRYPTION_KEY is not configured.');
        }
        const encryptionKey = Buffer.from(key, 'hex');
        if (encryptionKey.length !== this.KEY_LENGTH) {
            throw new common_1.InternalServerErrorException('ENCRYPTION_KEY must be exactly 32 bytes.');
        }
        return encryptionKey;
    }
    encrypt(plaintext) {
        try {
            if (!plaintext || !plaintext.trim()) {
                throw new common_1.InternalServerErrorException('Plaintext cannot be empty.');
            }
            const key = this.getEncryptionKey();
            const iv = crypto.randomBytes(this.IV_LENGTH);
            const cipher = crypto.createCipheriv(this.ALGORITHM, key, iv);
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
            throw new common_1.InternalServerErrorException('Message encryption failed.');
        }
    }
    decrypt(payload) {
        try {
            const key = this.getEncryptionKey();
            const parts = payload.split(':');
            if (parts.length !== 3) {
                throw new Error('Invalid encrypted payload.');
            }
            const [ivHex, authTagHex, encryptedHex] = parts;
            const decipher = crypto.createDecipheriv(this.ALGORITHM, key, Buffer.from(ivHex, 'hex'));
            decipher.setAuthTag(Buffer.from(authTagHex, 'hex'));
            const decrypted = Buffer.concat([
                decipher.update(Buffer.from(encryptedHex, 'hex')),
                decipher.final(),
            ]);
            return decrypted.toString('utf8');
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Message decryption failed.');
        }
    }
};
exports.EncryptionService = EncryptionService;
exports.EncryptionService = EncryptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EncryptionService);
//# sourceMappingURL=encryption.service.js.map