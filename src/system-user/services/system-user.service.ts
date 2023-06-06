import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SystemUserEntity } from '../entities/system-user.entity';
import { CreateSystemUserDto } from '../dto/create-system-user.dto';
import { UpdateSystemUserDto } from '../dto/update-system-user.dto';

@Injectable()
export class SystemUsersService {
  constructor(
    @InjectRepository(SystemUserEntity)
    private userEntityRepository: Repository<SystemUserEntity>,
  ) {}

  async create(
    createSystemUserDto: CreateSystemUserDto,
  ): Promise<SystemUserEntity> {
    try {
      const data = await this.userEntityRepository.save(createSystemUserDto);
      return data;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findAll() {
    try {
      return await this.userEntityRepository.find();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOne(username: string): Promise<SystemUserEntity> {
    try {
      return await this.userEntityRepository.findOne({
        where: { username: username },
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: number, updateSystemUserDto: UpdateSystemUserDto) {
    try {
      return await this.userEntityRepository.update(id, updateSystemUserDto);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
