import { Module } from '@nestjs/common';
import { ResultEntriesService } from '../services/result-entries.service';
import { ResultEntriesController } from '../controllers/result-entries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { BloodDetailsEntity } from '../entities/blood-details.entity';
// import { MedicalResultEntity } from '../entities/medical-result-details.entity';
// import { PastIllnessDetailsEntity } from '../entities/past-illness-details.entity';
import { ResultEntryEntity } from '../entities/result-entry.entity';
// import { UrineDetailsEntity } from '../entities/urine-deatils.entity';
// import { StoolDetailsEntity } from '../entities/stool-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResultEntryEntity])],
  controllers: [ResultEntriesController],
  providers: [ResultEntriesService],
  exports: [ResultEntriesService],
})
export class ResultEntriesModule {}
