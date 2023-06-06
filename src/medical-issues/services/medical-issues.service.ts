import { Injectable } from '@nestjs/common';
import { CreateMedicalIssueDto } from '../dto/create-medical-issue.dto';
import { UpdateMedicalIssueDto } from '../dto/update-medical-issue.dto';
import { MedicalIssueEntity } from '../entities/medical-issue.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MedicalIssuesService {
  constructor(
    @InjectRepository(MedicalIssueEntity)
    private medicalIssueEntityRepository: Repository<MedicalIssueEntity>,
  ) {}
  async create(createMedicalIssueDto: CreateMedicalIssueDto) {
    const medicalIssueRecord = await this.medicalIssueEntityRepository.save(
      createMedicalIssueDto,
    );
    return medicalIssueRecord;
  }

  findAll() {
    return `This action returns all medicalIssues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalIssue`;
  }

  async update(id: number, updateMedicalIssueDto: UpdateMedicalIssueDto) {
    const medicalIssueRecord = await this.medicalIssueEntityRepository.update(
      id,
      updateMedicalIssueDto,
    );
    return medicalIssueRecord;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalIssue`;
  }
}
