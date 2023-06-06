import { Repository } from 'typeorm';
import { DoctorEntity } from '../entities/doctor.entity';
import { CreateDoctorRequest } from '../dto/doctor-create.dto';
import { UpdateDoctorDto } from '../dto/doctor-update.dto';
export declare class DoctorService {
    private doctorEntityRepository;
    constructor(doctorEntityRepository: Repository<DoctorEntity>);
    create(createDoctorRequest: CreateDoctorRequest): Promise<DoctorEntity>;
    findAll(): Promise<DoctorEntity[]>;
    findOneById(id: number): Promise<DoctorEntity>;
    update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<import("typeorm").UpdateResult>;
}
