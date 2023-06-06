import { HttpException, Injectable } from '@nestjs/common';
import { CreateNationalityDto } from '../dto/create-nationality.dto';
import { UpdateNationalityDto } from '../dto/update-nationality.dto';
import { NationalityEntity } from '../entities/nationality.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NationalityService {
  constructor(
    @InjectRepository(NationalityEntity)
    private nationalityEntityRepository: Repository<NationalityEntity>,
  ) {}
  create(createNationalityDto: CreateNationalityDto) {
    return 'This action adds a new nationality';
  }

  async findAll() {
    try {
      return await this.nationalityEntityRepository.find();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} nationality`;
  }

  update(id: number, updateNationalityDto: UpdateNationalityDto) {
    return `This action updates a #${id} nationality`;
  }

  remove(id: number) {
    return `This action removes a #${id} nationality`;
  }
}
