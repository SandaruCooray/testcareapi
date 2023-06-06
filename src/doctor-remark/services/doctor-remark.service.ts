import { Injectable } from '@nestjs/common';
import { CreateDoctorRemarkDto } from '../dto/create-doctor-remark.dto';
import { UpdateDoctorRemarkDto } from '../dto/update-doctor-remark.dto';
import { DoctorRemarkEntity } from '../entities/doctor-remark.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorRemarkService {
  constructor(
    @InjectRepository(DoctorRemarkEntity)
    private doctorRemarkEntityEntityRepository: Repository<DoctorRemarkEntity>,
  ) {}

  async create(createDoctorRemarkDto: CreateDoctorRemarkDto) {
    const labRemarkRecord = await this.doctorRemarkEntityEntityRepository.save(
      createDoctorRemarkDto,
    );
    return labRemarkRecord;
  }

  findAll() {
    return `This action returns all doctorRemark`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doctorRemark`;
  }

  async update(id: number, updateDoctorRemarkDto: UpdateDoctorRemarkDto) {
    const labRemarkRecord =
      await this.doctorRemarkEntityEntityRepository.update(
        id,
        updateDoctorRemarkDto,
      );
    return labRemarkRecord;
  }

  remove(id: number) {
    return `This action removes a #${id} doctorRemark`;
  }
}
