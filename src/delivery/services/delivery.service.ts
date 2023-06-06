import { HttpException, Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from '../dto/create-delivery.dto';
import { UpdateDeliveryDto } from '../dto/update-delivery.dto';
import { DeliveryEntity } from '../entities/delivery.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(DeliveryEntity)
    private deliveryEntityRepository: Repository<DeliveryEntity>,
  ) {}

  async create(createDeliveryDto: CreateDeliveryDto) {
    try {
      const delivery = await this.deliveryEntityRepository.save(
        createDeliveryDto,
      );
      return delivery;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findAll() {
    try {
      const delivery = await this.deliveryEntityRepository.find();
      return delivery;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} delivery`;
  }

  async update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    try {
      const delivery = await this.deliveryEntityRepository.update(
        id,
        updateDeliveryDto,
      );
      return delivery;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} delivery`;
  }
}
