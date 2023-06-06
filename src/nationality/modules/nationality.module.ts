import { Module } from '@nestjs/common';
import { NationalityService } from '../services/nationality.service';
import { NationalityController } from '../controllers/nationality.controller';
import { NationalityEntity } from '../entities/nationality.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NationalityEntity])],
  controllers: [NationalityController],
  providers: [NationalityService],
})
export class NationalityModule {}
