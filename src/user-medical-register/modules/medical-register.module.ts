import { Module } from '@nestjs/common';
import { MedicalRegisterService } from '../services/medical-register.service';
import { MedicalRegistersController } from '../controllers/medical-register.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRegisterEntity } from '../entities/medical-register.entity';
import { LabRemarkModule } from 'src/lab-remark/modules/lab-remark.module';
import { MedicalIssuesModule } from 'src/medical-issues/modules/medical-issues.module';
import { ResultEntriesModule } from 'src/result-entry/modules/result-entries.module';
import { DeliveryModule } from 'src/delivery/modules/delivery.module';
import { DoctorRemarkModule } from 'src/doctor-remark/modules/doctor-remark.module';
import { NormalPaymentModule } from 'src/normal-payment/modules/payment.module';
import { MmrPaymentModule } from 'src/mmr-payment/modules/mmr-payment.module';
import { MedicalCertificateModule } from 'src/medical-certificate/modules/medical-certificate.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MedicalRegisterEntity]),
    LabRemarkModule,
    MedicalIssuesModule,
    ResultEntriesModule,
    DeliveryModule,
    DoctorRemarkModule,
    NormalPaymentModule,
    MmrPaymentModule,
    MedicalCertificateModule,
  ],
  controllers: [MedicalRegistersController],
  providers: [MedicalRegisterService],
  exports: [MedicalRegisterService],
})
export class MedicalRegisterModule {}
