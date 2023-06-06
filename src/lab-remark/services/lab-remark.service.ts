import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLabRemarkDto } from '../dto/create-lab-remark.dto';
import { UpdateLabRemarkDto } from '../dto/update-lab-remark.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LabRemarkEntity } from '../entities/lab-remark.entity';
// import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import { MedicalRegisterService } from 'src/user-medical-register/services/medical-register.service';

@Injectable()
export class LabRemarkService {
  constructor(
    @InjectRepository(LabRemarkEntity)
    private labRemarkEntityRepository: Repository<LabRemarkEntity>,
  ) {}
  async create(createLabRemarkDto: CreateLabRemarkDto) {
    const labRemarkRecord = await this.labRemarkEntityRepository.save(
      createLabRemarkDto,
    );
    return labRemarkRecord;
  }

  findAll() {
    return `This action returns all labRemark`;
  }

  async findOne(id: number) {
    const lapRemarkInfo = await this.labRemarkEntityRepository.findOne({
      where: { id: id },
    });
    return lapRemarkInfo;
  }

  async update(id: number, updateLabRemarkDto: UpdateLabRemarkDto) {
    const labRemarkRecord = await this.labRemarkEntityRepository.update(
      id,
      updateLabRemarkDto,
    );
    return labRemarkRecord;
  }

  remove(id: number) {
    return `This action removes a #${id} labRemark`;
  }
}
