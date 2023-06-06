import { Module } from '@nestjs/common';
import { NormalPaymentService } from '../services/payment.service';
import { PaymentController } from '../controllers/payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NormalPaymentEntity } from '../entities/payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NormalPaymentEntity])],
  controllers: [PaymentController],
  providers: [NormalPaymentService],
  exports: [NormalPaymentService],
})
export class NormalPaymentModule {}
