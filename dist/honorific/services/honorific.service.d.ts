import { CreateHonorificDto } from '../dto/create-honorific.dto';
import { UpdateHonorificDto } from '../dto/update-honorific.dto';
import { HororificEntity } from '../entities/honorific.entity';
import { Repository } from 'typeorm';
export declare class HonorificService {
    private hororificEntityRepository;
    constructor(hororificEntityRepository: Repository<HororificEntity>);
    create(createHonorificDto: CreateHonorificDto): string;
    findAll(): Promise<HororificEntity[]>;
    findOne(id: number): string;
    update(id: number, updateHonorificDto: UpdateHonorificDto): string;
    remove(id: number): string;
}
