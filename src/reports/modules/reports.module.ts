import { Module } from '@nestjs/common';
import { ReportsService } from '../services/reports.service';
import { ReportsController } from '../controllers/reports.controller';
import { MedicalRegisterModule } from 'src/user-medical-register/modules/medical-register.module';

@Module({
  imports: [MedicalRegisterModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
