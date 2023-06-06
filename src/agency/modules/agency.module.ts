import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencyEntity } from '../entities/agency.entity';
import { AgencyController } from '../controllers/agency.controller';
import { AgencyService } from '../services/agency.service';

@Module({
  imports: [TypeOrmModule.forFeature([AgencyEntity])],
  controllers: [AgencyController],
  providers: [AgencyService],
})
export class AgencyModule {}
