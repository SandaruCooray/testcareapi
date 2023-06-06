import { CreateMedicalIssueDto } from '../dto/create-medical-issue.dto';
import { UpdateMedicalIssueDto } from '../dto/update-medical-issue.dto';
import { MedicalIssueEntity } from '../entities/medical-issue.entity';
import { Repository } from 'typeorm';
export declare class MedicalIssuesService {
    private medicalIssueEntityRepository;
    constructor(medicalIssueEntityRepository: Repository<MedicalIssueEntity>);
    create(createMedicalIssueDto: CreateMedicalIssueDto): Promise<CreateMedicalIssueDto & MedicalIssueEntity>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMedicalIssueDto: UpdateMedicalIssueDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
