import { Injectable } from '@nestjs/common';
import { CreateMedicalCertificateDto } from '../dto/create-medical-certificate.dto';
import { UpdateMedicalCertificateDto } from '../dto/update-medical-certificate.dto';
import { MedicalCertificateEntity } from '../entities/medical-certificate.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class MedicalCertificateService {
  constructor(
    @InjectRepository(MedicalCertificateEntity)
    private medicalCertificateEntityRepository: Repository<MedicalCertificateEntity>,
  ) {}
  async create(createMedicalCertificateDto: CreateMedicalCertificateDto) {
    const medicalCertificateRecord =
      await this.medicalCertificateEntityRepository.save(
        createMedicalCertificateDto,
      );
    return medicalCertificateRecord;
  }

  async findAll() {
    const medicalCertificateRecord =
      await this.medicalCertificateEntityRepository.find();
    return medicalCertificateRecord;
  }

  async findOne(id: number) {
    const medicalCertificate =
      await this.medicalCertificateEntityRepository.findOne({
        where: { id: id },
      });
    return medicalCertificate;
  }

  async update(
    id: number,
    updateMedicalCertificateDto: UpdateMedicalCertificateDto,
  ) {
    const labRemarkRecord =
      await this.medicalCertificateEntityRepository.update(
        id,
        updateMedicalCertificateDto,
      );
    return labRemarkRecord;
  }

  async findByIds(medicalCertificateIds: number[]) {
    console.log('medicalCertificateIds', medicalCertificateIds);
    const tmedicalrecodsPromises = medicalCertificateIds.map((id) =>
      this.medicalCertificateEntityRepository.findOne({
        where: { id },
      }),
    );
    const medicalrecods = await Promise.all(tmedicalrecodsPromises);

    return medicalrecods;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalCertificate`;
  }
}
