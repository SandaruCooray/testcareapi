import { HttpException, Injectable } from '@nestjs/common';
import { CreateCityDto } from '../dto/create-city.dto';
import { UpdateCityDto } from '../dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from '../entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private cityEntityRepository: Repository<CityEntity>,
  ) {}
  create(createCityDto: CreateCityDto) {
    return 'This action adds a new city';
  }

  async findAll() {
    try {
      return await this.cityEntityRepository.find();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
