import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionEntity } from '../entities/position.entity';
import { PositionController } from '../controllers/position.controller';
import { PositionService } from '../services/position.service';

@Module({
  imports: [TypeOrmModule.forFeature([PositionEntity])],
  controllers: [PositionController],
  providers: [PositionService],
})
export class PositionModule {}
