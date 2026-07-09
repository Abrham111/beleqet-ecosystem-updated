import { PrismaService } from '../../prisma/prisma.service';
import { EncryptionService } from '../../common/encryption/encryption.service';
export declare class ChatService {
    private readonly prisma;
    private readonly encryptionService;
    private readonly logger;
    constructor(prisma: PrismaService, encryptionService: EncryptionService);
    createOrGetRoom(userId1: string, userId2: string, contractId?: string): Promise<{
        messages: {
            id: string;
            content: string;
            createdAt: Date;
            metadata: import("@prisma/client/runtime/library").JsonValue | null;
            roomId: string;
            senderId: string;
            isSystem: boolean;
        }[];
        participants: {
            id: string;
            userId: string;
            joinedAt: Date;
            lastReadAt: Date | null;
            roomId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        jobId: string | null;
        contractId: string | null;
    }>;
    saveMessage(roomId: string, senderId: string, content: string, metadata?: any): Promise<{
        sender: {
            id: string;
            role: import(".prisma/client").$Enums.UserRole;
            firstName: string;
            lastName: string;
            avatarUrl: string | null;
        };
    } & {
        id: string;
        content: string;
        createdAt: Date;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        roomId: string;
        senderId: string;
        isSystem: boolean;
    }>;
    getRoomMessages(roomId: string, userId: string, take?: number): Promise<{
        content: string;
        sender: {
            id: string;
            role: import(".prisma/client").$Enums.UserRole;
            firstName: string;
            lastName: string;
            avatarUrl: string | null;
        };
        id: string;
        createdAt: Date;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        roomId: string;
        senderId: string;
        isSystem: boolean;
    }[]>;
}
