import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from '../entities/doctor.entity';
import { DoctorController } from '../controllers/doctor.controller';
import { DoctorService } from '../services/doctor.service';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorEntity])],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
