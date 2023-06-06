import { HttpException, Injectable } from '@nestjs/common';
import { UpdateResultEntryDto } from '../dto/update-result-entry.dto';
// import { CreateMedicalResultCombineDto } from '../dto/combine-result-entries.dto';
import { ResultEntryEntity } from '../entities/result-entry.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResultEntryDto } from '../dto/create-result-entry.dto';

@Injectable()
export class ResultEntriesService {
  constructor(
    @InjectRepository(ResultEntryEntity)
    private resultEntryRepository: Repository<ResultEntryEntity>, // @InjectRepository(BloodDetailsEntity) // private bloodDetailsEntityRepository: Repository<BloodDetailsEntity>, // @InjectRepository(MedicalResultEntity) // private medicalResultEntityRepository: Repository<MedicalResultEntity>, // @InjectRepository(PastIllnessDetailsEntity) // private pastIllnessDetailsEntityRepository: Repository<PastIllnessDetailsEntity>, // @InjectRepository(StoolDetailsEntity) // private stoolDetailsEntityRepository: Repository<StoolDetailsEntity>, // @InjectRepository(UrineDetailsEntity) // private urineDetailsEntityRepository: Repository<UrineDetailsEntity>,
  ) {}

  async create(
    createResultEntryDto: CreateResultEntryDto,
  ): Promise<ResultEntryEntity> {
    try {
      const data = await this.resultEntryRepository.save(createResultEntryDto);
      return data;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    return `This action returns all resultEnties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resultEntry`;
  }

  async update(id: number, updateResultEntryDto: UpdateResultEntryDto) {
    try {
      const data = await this.resultEntryRepository.update(
        id,
        updateResultEntryDto,
      );
      return data;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} resultEntry`;
  }
}
