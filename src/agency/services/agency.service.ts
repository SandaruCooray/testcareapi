import { HttpException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { AgencyEntity } from '../entities/agency.entity';
import { CreateAgencyDto } from '../dto/create-agency.dto';
import { UpdateAgencyDto } from '../dto/update-agency.dto';

@Injectable()
export class AgencyService {
  constructor(
    @InjectRepository(AgencyEntity)
    private agencyEntityRepository: Repository<AgencyEntity>,
  ) {}

  async create(createAgencyDto: CreateAgencyDto) {
    try {
      const agency = await this.agencyEntityRepository.save(createAgencyDto);
      return agency;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findAll() {
    try {
      const agency = await this.agencyEntityRepository.find();
      return agency;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOne(id: number) {
    try {
      const agency = await this.agencyEntityRepository.findOne({
        where: { id: id },
      });
      return agency;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: number, updateAgencyDto: UpdateAgencyDto) {
    try {
      const agency = await this.agencyEntityRepository.update(
        id,
        updateAgencyDto,
      );
      return agency;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} agency`;
  }
}
