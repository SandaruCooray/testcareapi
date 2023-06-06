import { PartialType } from '@nestjs/swagger';
import { CreateMmrPaymentDto } from './create-mmr-payment.dto';

export class UpdateMmrPaymentDto extends PartialType(CreateMmrPaymentDto) {}
