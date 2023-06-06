import { Module } from '@nestjs/common';
import { CityService } from '../services/city.service';
import { CityController } from '../controllers/city.controller';
import { CityEntity } from '../entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity])],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
