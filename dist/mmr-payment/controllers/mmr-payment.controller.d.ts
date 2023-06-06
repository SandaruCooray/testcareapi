import { MmrPaymentService } from '../services/mmr-payment.service';
import { CreateMmrPaymentDto } from '../dto/create-mmr-payment.dto';
import { UpdateMmrPaymentDto } from '../dto/update-mmr-payment.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
export declare class MmrPaymentController {
    private readonly mmrPaymentService;
    constructor(mmrPaymentService: MmrPaymentService);
    create(createMmrPaymentDto: CreateMmrPaymentDto): Promise<CreateMmrPaymentDto & import("../entities/mmr-payment.entity").MmrPaymentEntity>;
    findAll(): string;
    findOne(id: string): Promise<import("../entities/mmr-payment.entity").MmrPaymentEntity>;
    update(id: string, updateMmrPaymentDto: UpdateMmrPaymentDto): Promise<CommonResponseHandler>;
    remove(id: string): string;
}
