import { Module } from '@nestjs/common';
import { LabRemarkService } from '../services/lab-remark.service';
import { LabRemarkController } from '../controllers/lab-remark.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabRemarkEntity } from '../entities/lab-remark.entity';
import { MedicalRegisterModule } from 'src/user-medical-register/modules/medical-register.module';

@Module({
  imports: [TypeOrmModule.forFeature([LabRemarkEntity])],
  controllers: [LabRemarkController],
  providers: [LabRemarkService],
  exports: [LabRemarkService],
})
export class LabRemarkModule {}
