import { CreateLabRemarkDto } from '../dto/create-lab-remark.dto';
import { UpdateLabRemarkDto } from '../dto/update-lab-remark.dto';
import { Repository } from 'typeorm';
import { LabRemarkEntity } from '../entities/lab-remark.entity';
export declare class LabRemarkService {
    private labRemarkEntityRepository;
    constructor(labRemarkEntityRepository: Repository<LabRemarkEntity>);
    create(createLabRemarkDto: CreateLabRemarkDto): Promise<CreateLabRemarkDto & LabRemarkEntity>;
    findAll(): string;
    findOne(id: number): Promise<LabRemarkEntity>;
    update(id: number, updateLabRemarkDto: UpdateLabRemarkDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
