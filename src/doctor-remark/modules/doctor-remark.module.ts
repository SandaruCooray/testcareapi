import { Module } from '@nestjs/common';
import { DoctorRemarkService } from '../services/doctor-remark.service';
import { DoctorRemarkController } from '../controllers/doctor-remark.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorRemarkEntity } from '../entities/doctor-remark.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorRemarkEntity])],
  controllers: [DoctorRemarkController],
  providers: [DoctorRemarkService],
  exports: [DoctorRemarkService],
})
export class DoctorRemarkModule {}
