import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGalleryDto } from '../dto/create-gallery.dto';
import { UpdateGalleryDto } from '../dto/update-gallery.dto';
import { GalleryEntity } from '../entities/gallery.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(GalleryEntity)
    private galleryEntityRepository: Repository<GalleryEntity>,
  ) {}

  async create(createGalleryDto: CreateGalleryDto) {
    try {
      const gallery = await this.galleryEntityRepository.save(createGalleryDto);
      return gallery;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findAll(query) {
    console.log('query', query);
    try {
      if (query?.passportNo || query?.regDate) {
        const gallery = await this.galleryEntityRepository.find({
          where: query,
        });
        return gallery;
      } else {
        throw new HttpException(
          { status: HttpStatus.FORBIDDEN, message: `Data not found` },
          HttpStatus.FORBIDDEN,
        );
      }
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOne(passportNo: string) {
    try {
      const gallery = await this.galleryEntityRepository.findOne({
        where: { passportNo: passportNo },
      });

      if (gallery) {
        throw new HttpException(
          { status: HttpStatus.FORBIDDEN, message: `photo is already exsist!` },
          HttpStatus.FORBIDDEN,
        );
      }
      return gallery;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  update(id: number, updateGalleryDto: UpdateGalleryDto) {
    return `This action updates a #${id} gallery`;
  }

  remove(id: number) {
    return `This action removes a #${id} gallery`;
  }
}
