import { Injectable } from '@nestjs/common';
import { CreatPositionDto } from '../dtos/create-position.dto';
import { UpdatePositionDto } from '../dtos/update-position.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PositionEntity } from '../entities/position.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(PositionEntity)
    private positionEntityRepository: Repository<PositionEntity>,
  ) {}
  // create(creatPositionDto: CreatPositionDto) {
  //   return 'This action adds a new creatPositionDto';
  // }

  findAll() {
    console.log('eeee');
    return this.positionEntityRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} creatPositionDto`;
  // }

  // update(id: number, updatePositionDto: UpdatePositionDto) {
  //   return `This action updates a #${id} creatPositionDto`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} creatPositionDto`;
  // }
}
