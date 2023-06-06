import { Module } from '@nestjs/common';
import { MmrPaymentService } from '../services/mmr-payment.service';
import { MmrPaymentController } from '../controllers/mmr-payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MmrPaymentEntity } from '../entities/mmr-payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MmrPaymentEntity])],
  controllers: [MmrPaymentController],
  providers: [MmrPaymentService],
  exports: [MmrPaymentService],
})
export class MmrPaymentModule {}
