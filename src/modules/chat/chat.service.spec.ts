import { Test, TestingModule } from '@nestjs/testing';
import { ChatService } from './chat.service';
import { PrismaService } from '../../prisma/prisma.service';
import { EncryptionService } from '@common/encryption/encryption.service';

// Minimal mock so jest doesn't try to connect to a real database
const mockPrismaService = {
  chatRoom: { findUnique: jest.fn(), create: jest.fn() },
  chatParticipant: { findUnique: jest.fn() },
  message: { create: jest.fn(), findMany: jest.fn() },
};

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: EncryptionService, useValue: mockEncryptionService },
      ],
    }).compile();

    const mockEncryptionService = {
      encrypt: jest.fn((text) => text),
      decrypt: jest.fn((text) => text),
    };

    service = module.get<ChatService>(ChatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
