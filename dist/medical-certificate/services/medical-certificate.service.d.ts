import { CreateMedicalCertificateDto } from '../dto/create-medical-certificate.dto';
import { UpdateMedicalCertificateDto } from '../dto/update-medical-certificate.dto';
import { MedicalCertificateEntity } from '../entities/medical-certificate.entity';
import { Repository } from 'typeorm';
export declare class MedicalCertificateService {
    private medicalCertificateEntityRepository;
    constructor(medicalCertificateEntityRepository: Repository<MedicalCertificateEntity>);
    create(createMedicalCertificateDto: CreateMedicalCertificateDto): Promise<CreateMedicalCertificateDto & MedicalCertificateEntity>;
    findAll(): Promise<MedicalCertificateEntity[]>;
    findOne(id: number): Promise<MedicalCertificateEntity>;
    update(id: number, updateMedicalCertificateDto: UpdateMedicalCertificateDto): Promise<import("typeorm").UpdateResult>;
    findByIds(medicalCertificateIds: number[]): Promise<MedicalCertificateEntity[]>;
    remove(id: number): string;
}
