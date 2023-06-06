import { CreateMmrPaymentDto } from '../dto/create-mmr-payment.dto';
import { UpdateMmrPaymentDto } from '../dto/update-mmr-payment.dto';
import { MmrPaymentEntity } from '../entities/mmr-payment.entity';
import { Repository } from 'typeorm';
export declare class MmrPaymentService {
    private mmrPaymentEntityRepository;
    constructor(mmrPaymentEntityRepository: Repository<MmrPaymentEntity>);
    create(createMmrPaymentDto: CreateMmrPaymentDto): Promise<CreateMmrPaymentDto & MmrPaymentEntity>;
    findAll(): string;
    findOne(id: number): Promise<MmrPaymentEntity>;
    update(id: number, updateMmrPaymentDto: UpdateMmrPaymentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
