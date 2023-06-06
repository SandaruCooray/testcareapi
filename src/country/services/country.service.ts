import { HttpException, Injectable } from '@nestjs/common';
import { CreateCountryDto } from '../dto/create-country.dto';
import { UpdateCountryDto } from '../dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from '../entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity)
    private countryEntityRepository: Repository<CountryEntity>,
  ) {}

  async create(createCountryDto: CreateCountryDto) {
    try {
      const country = await this.countryEntityRepository.save(createCountryDto);
      return country;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findAll() {
    try {
      const countries = await this.countryEntityRepository.find();
      return countries;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOne(id: number) {
    try {
      const country = await this.countryEntityRepository.findOne({
        where: { id: id },
      });
      return country;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    try {
      const country = await this.countryEntityRepository.update(
        id,
        updateCountryDto,
      );
      return country;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
