import { HttpException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NormalPaymentEntity } from '../entities/payment.entity';

@Injectable()
export class NormalPaymentService {
  @InjectRepository(NormalPaymentEntity)
  private normalPaymentEntityRepository: Repository<NormalPaymentEntity>;
  async create(createPaymentDto: CreatePaymentDto) {
    try {
      const normalPaymentRecord = await this.normalPaymentEntityRepository.save(
        createPaymentDto,
      );
      return normalPaymentRecord;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    return `This action returns all payment`;
  }

  async findOne(id: number) {
    try {
      const normalPaymentRecord =
        await this.normalPaymentEntityRepository.findOne({
          where: { id },
        });
      return normalPaymentRecord;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    try {
      const normalPaymentRecord =
        await this.normalPaymentEntityRepository.update(id, updatePaymentDto);
      return normalPaymentRecord;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
