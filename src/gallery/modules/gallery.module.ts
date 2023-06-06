import { Module } from '@nestjs/common';
import { GalleryService } from '../services/gallery.service';
import { GalleryController } from '../controllers/gallery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GalleryEntity } from '../entities/gallery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GalleryEntity])],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class GalleryModule {}
