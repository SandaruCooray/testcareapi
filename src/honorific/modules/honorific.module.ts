import { Module } from '@nestjs/common';
import { HororificEntity } from '../entities/honorific.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HonorificController } from '../controllers/honorific.controller';
import { HonorificService } from '../services/honorific.service';

@Module({
  imports: [TypeOrmModule.forFeature([HororificEntity])],
  controllers: [HonorificController],
  providers: [HonorificService],
})
export class HonorificModule {}
