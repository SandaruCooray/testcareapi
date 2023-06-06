import { HttpException, Injectable } from '@nestjs/common';
import { CreateMmrPaymentDto } from '../dto/create-mmr-payment.dto';
import { UpdateMmrPaymentDto } from '../dto/update-mmr-payment.dto';
import { MmrPaymentEntity } from '../entities/mmr-payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MmrPaymentService {
  constructor(
    @InjectRepository(MmrPaymentEntity)
    private mmrPaymentEntityRepository: Repository<MmrPaymentEntity>,
  ) {}
  async create(createMmrPaymentDto: CreateMmrPaymentDto) {
    try {
      const mmrPaymentRecord = await this.mmrPaymentEntityRepository.save(
        createMmrPaymentDto,
      );
      return mmrPaymentRecord;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    return `This action returns all mmrPayment`;
  }

  async findOne(id: number) {
    try {
      const mmrPaymentRecord = await this.mmrPaymentEntityRepository.findOne({
        where: { id },
      });
      return mmrPaymentRecord;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: number, updateMmrPaymentDto: UpdateMmrPaymentDto) {
    try {
      const mmrPaymentRecord = await this.mmrPaymentEntityRepository.update(
        id,
        updateMmrPaymentDto,
      );
      return mmrPaymentRecord;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} mmrPayment`;
  }
}
