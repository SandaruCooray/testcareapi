import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorEntity } from '../entities/doctor.entity';
import { CreateDoctorRequest } from '../dto/doctor-create.dto';
import { UpdateDoctorDto } from '../dto/doctor-update.dto';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(DoctorEntity)
    private doctorEntityRepository: Repository<DoctorEntity>,
  ) {}

  async create(
    createDoctorRequest: CreateDoctorRequest,
  ): Promise<DoctorEntity> {
    try {
      const data = await this.doctorEntityRepository.findOne({
        where: [{ code: createDoctorRequest.code }],
      });

      if (!data) {
        const newDoctor = new DoctorEntity();

        newDoctor.name = createDoctorRequest.name;
        newDoctor.code = createDoctorRequest.code;
        newDoctor.address = createDoctorRequest.address;
        newDoctor.commissionRate = createDoctorRequest.commissionRate;
        newDoctor.fax = createDoctorRequest.fax;
        newDoctor.telePhone = createDoctorRequest.telePhone;

        await this.doctorEntityRepository.save(newDoctor);

        return newDoctor;
      } else {
        throw new HttpException(
          { message: `Duplicate Doctor Code` },
          HttpStatus.FORBIDDEN,
        );
      }
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findAll() {
    try {
      return await this.doctorEntityRepository.find();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOneById(id: number) {
    try {
      return await this.doctorEntityRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    try {
      return await this.doctorEntityRepository.update(id, updateDoctorDto);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
