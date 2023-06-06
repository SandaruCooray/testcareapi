import { Module } from '@nestjs/common';
import { MedicalIssuesService } from '../services/medical-issues.service';
import { MedicalIssuesController } from '../controllers/medical-issues.controller';
import { MedicalIssueEntity } from '../entities/medical-issue.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalIssueEntity])],
  controllers: [MedicalIssuesController],
  providers: [MedicalIssuesService],
  exports: [MedicalIssuesService],
})
export class MedicalIssuesModule {}
