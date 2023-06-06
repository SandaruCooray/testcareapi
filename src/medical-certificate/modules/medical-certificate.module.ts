import { Module } from '@nestjs/common';
import { MedicalCertificateService } from '../services/medical-certificate.service';
import { MedicalCertificateController } from '../controllers/medical-certificate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalCertificateEntity } from '../entities/medical-certificate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalCertificateEntity])],
  controllers: [MedicalCertificateController],
  providers: [MedicalCertificateService],
  exports: [MedicalCertificateService],
})
export class MedicalCertificateModule {}
