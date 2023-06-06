import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { NormalPaymentEntity } from '../entities/payment.entity';
export declare class NormalPaymentService {
    private normalPaymentEntityRepository;
    create(createPaymentDto: CreatePaymentDto): Promise<CreatePaymentDto & NormalPaymentEntity>;
    findAll(): string;
    findOne(id: number): Promise<NormalPaymentEntity>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
