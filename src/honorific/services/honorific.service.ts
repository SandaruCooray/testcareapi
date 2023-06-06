import { HttpException, Injectable } from '@nestjs/common';
import { CreateHonorificDto } from '../dto/create-honorific.dto';
import { UpdateHonorificDto } from '../dto/update-honorific.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HororificEntity } from '../entities/honorific.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HonorificService {
  constructor(
    @InjectRepository(HororificEntity)
    private hororificEntityRepository: Repository<HororificEntity>, // private medicalRegisterService: MedicalRegisterService,
  ) {}
  create(createHonorificDto: CreateHonorificDto) {
    return 'This action adds a new honorific';
  }

  async findAll() {
    try {
      const honorific = await this.hororificEntityRepository.find();
      return honorific;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} honorific`;
  }

  update(id: number, updateHonorificDto: UpdateHonorificDto) {
    return `This action updates a #${id} honorific`;
  }

  remove(id: number) {
    return `This action removes a #${id} honorific`;
  }
}
