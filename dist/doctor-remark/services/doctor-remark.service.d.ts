import { CreateDoctorRemarkDto } from '../dto/create-doctor-remark.dto';
import { UpdateDoctorRemarkDto } from '../dto/update-doctor-remark.dto';
import { DoctorRemarkEntity } from '../entities/doctor-remark.entity';
import { Repository } from 'typeorm';
export declare class DoctorRemarkService {
    private doctorRemarkEntityEntityRepository;
    constructor(doctorRemarkEntityEntityRepository: Repository<DoctorRemarkEntity>);
    create(createDoctorRemarkDto: CreateDoctorRemarkDto): Promise<CreateDoctorRemarkDto & DoctorRemarkEntity>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDoctorRemarkDto: UpdateDoctorRemarkDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
