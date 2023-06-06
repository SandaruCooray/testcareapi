import { NormalPaymentService } from '../services/payment.service';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
export declare class PaymentController {
    private readonly normalPaymentService;
    constructor(normalPaymentService: NormalPaymentService);
    create(createPaymentDto: CreatePaymentDto): Promise<CreatePaymentDto & import("../entities/payment.entity").NormalPaymentEntity>;
    findAll(): string;
    findOne(id: string): Promise<import("../entities/payment.entity").NormalPaymentEntity>;
    update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<CommonResponseHandler>;
    remove(id: string): string;
}
