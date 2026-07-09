import { CurrentUserPayload } from '../../common/decorators/current-user.decorator';
import { FreelanceService, CreateFreelanceJobDto, CreateBidDto, CreateMilestoneDto } from './freelance.service';
import { EscrowService } from '../escrow/escrow.service';
export declare class FreelanceController {
    private readonly svc;
    private readonly escrowSvc;
    constructor(svc: FreelanceService, escrowSvc: EscrowService);
    findJobs(q: {
        q?: string;
        category?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        items: ({
            _count: {
                bids: number;
            };
            category: {
                id: string;
                label: string;
                slug: string;
                icon: string | null;
            };
        } & {
            id: string;
            title: string;
            description: string;
            status: import(".prisma/client").$Enums.FreelanceJobStatus;
            createdAt: Date;
            updatedAt: Date;
            skills: string[];
            categoryId: string;
            currency: string;
            featured: boolean;
            experienceLevel: string | null;
            attachments: string[];
            budgetMin: number;
            budgetMax: number;
            pricingType: string;
            deadlineDays: number;
            locationPreference: string | null;
            clientId: string;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findJob(id: string): Promise<{
        bids: ({
            freelancer: {
                id: string;
                firstName: string;
                lastName: string;
            };
        } & {
            id: string;
            status: import(".prisma/client").$Enums.BidStatus;
            createdAt: Date;
            updatedAt: Date;
            coverLetter: string;
            amount: number;
            timelineDays: number;
            freelanceJobId: string;
            freelancerId: string;
            qualityScore: number | null;
        })[];
        category: {
            id: string;
            label: string;
            slug: string;
            icon: string | null;
        };
        client: {
            id: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.FreelanceJobStatus;
        createdAt: Date;
        updatedAt: Date;
        skills: string[];
        categoryId: string;
        currency: string;
        featured: boolean;
        experienceLevel: string | null;
        attachments: string[];
        budgetMin: number;
        budgetMax: number;
        pricingType: string;
        deadlineDays: number;
        locationPreference: string | null;
        clientId: string;
    }>;
    createJob(u: CurrentUserPayload, dto: CreateFreelanceJobDto): Promise<{
        category: {
            id: string;
            label: string;
            slug: string;
            icon: string | null;
        };
        client: {
            id: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.FreelanceJobStatus;
        createdAt: Date;
        updatedAt: Date;
        skills: string[];
        categoryId: string;
        currency: string;
        featured: boolean;
        experienceLevel: string | null;
        attachments: string[];
        budgetMin: number;
        budgetMax: number;
        pricingType: string;
        deadlineDays: number;
        locationPreference: string | null;
        clientId: string;
    }>;
    submitBid(id: string, u: CurrentUserPayload, dto: CreateBidDto): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.BidStatus;
        createdAt: Date;
        updatedAt: Date;
        coverLetter: string;
        amount: number;
        timelineDays: number;
        freelanceJobId: string;
        freelancerId: string;
        qualityScore: number | null;
    }>;
    acceptBid(id: string, u: CurrentUserPayload): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ContractStatus;
        updatedAt: Date;
        currency: string;
        clientId: string;
        freelanceJobId: string;
        freelancerId: string;
        agreedAmount: number;
        startedAt: Date;
        completedAt: Date | null;
    }>;
    rejectBid(id: string, u: CurrentUserPayload): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.BidStatus;
        createdAt: Date;
        updatedAt: Date;
        coverLetter: string;
        amount: number;
        timelineDays: number;
        freelanceJobId: string;
        freelancerId: string;
        qualityScore: number | null;
    }>;
    myBids(u: CurrentUserPayload): Promise<({
        freelanceJob: {
            contract: {
                id: string;
                status: import(".prisma/client").$Enums.ContractStatus;
                updatedAt: Date;
                currency: string;
                clientId: string;
                freelanceJobId: string;
                freelancerId: string;
                agreedAmount: number;
                startedAt: Date;
                completedAt: Date | null;
            } | null;
            category: {
                id: string;
                label: string;
                slug: string;
                icon: string | null;
            };
        } & {
            id: string;
            title: string;
            description: string;
            status: import(".prisma/client").$Enums.FreelanceJobStatus;
            createdAt: Date;
            updatedAt: Date;
            skills: string[];
            categoryId: string;
            currency: string;
            featured: boolean;
            experienceLevel: string | null;
            attachments: string[];
            budgetMin: number;
            budgetMax: number;
            pricingType: string;
            deadlineDays: number;
            locationPreference: string | null;
            clientId: string;
        };
    } & {
        id: string;
        status: import(".prisma/client").$Enums.BidStatus;
        createdAt: Date;
        updatedAt: Date;
        coverLetter: string;
        amount: number;
        timelineDays: number;
        freelanceJobId: string;
        freelancerId: string;
        qualityScore: number | null;
    })[]>;
    myContracts(u: CurrentUserPayload): Promise<({
        freelanceJob: {
            id: string;
            title: string;
            description: string;
            status: import(".prisma/client").$Enums.FreelanceJobStatus;
            createdAt: Date;
            updatedAt: Date;
            skills: string[];
            categoryId: string;
            currency: string;
            featured: boolean;
            experienceLevel: string | null;
            attachments: string[];
            budgetMin: number;
            budgetMax: number;
            pricingType: string;
            deadlineDays: number;
            locationPreference: string | null;
            clientId: string;
        };
        freelancer: {
            id: string;
            firstName: string;
            lastName: string;
        };
        client: {
            id: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        status: import(".prisma/client").$Enums.ContractStatus;
        updatedAt: Date;
        currency: string;
        clientId: string;
        freelanceJobId: string;
        freelancerId: string;
        agreedAmount: number;
        startedAt: Date;
        completedAt: Date | null;
    })[]>;
    contract(id: string): Promise<{
        freelanceJob: {
            id: string;
            title: string;
            description: string;
            status: import(".prisma/client").$Enums.FreelanceJobStatus;
            createdAt: Date;
            updatedAt: Date;
            skills: string[];
            categoryId: string;
            currency: string;
            featured: boolean;
            experienceLevel: string | null;
            attachments: string[];
            budgetMin: number;
            budgetMax: number;
            pricingType: string;
            deadlineDays: number;
            locationPreference: string | null;
            clientId: string;
        };
        freelancer: {
            id: string;
            firstName: string;
            lastName: string;
        };
        client: {
            id: string;
            firstName: string;
            lastName: string;
        };
        milestones: ({
            deliverables: {
                id: string;
                notes: string | null;
                milestoneId: string;
                fileUrl: string | null;
                submittedAt: Date;
            }[];
        } & {
            id: string;
            title: string;
            description: string | null;
            status: import(".prisma/client").$Enums.MilestoneStatus;
            createdAt: Date;
            updatedAt: Date;
            deadline: Date;
            amount: number;
            approvedAt: Date | null;
            contractId: string;
        })[];
    } & {
        id: string;
        status: import(".prisma/client").$Enums.ContractStatus;
        updatedAt: Date;
        currency: string;
        clientId: string;
        freelanceJobId: string;
        freelancerId: string;
        agreedAmount: number;
        startedAt: Date;
        completedAt: Date | null;
    }>;
    createMilestone(id: string, u: CurrentUserPayload, dto: CreateMilestoneDto): Promise<{
        id: string;
        title: string;
        description: string | null;
        status: import(".prisma/client").$Enums.MilestoneStatus;
        createdAt: Date;
        updatedAt: Date;
        deadline: Date;
        amount: number;
        approvedAt: Date | null;
        contractId: string;
    }>;
    approveMilestone(id: string, u: CurrentUserPayload): Promise<{
        success: boolean;
    }>;
}
