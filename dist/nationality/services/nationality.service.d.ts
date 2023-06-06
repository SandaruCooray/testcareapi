import { CreateNationalityDto } from '../dto/create-nationality.dto';
import { UpdateNationalityDto } from '../dto/update-nationality.dto';
import { NationalityEntity } from '../entities/nationality.entity';
import { Repository } from 'typeorm';
export declare class NationalityService {
    private nationalityEntityRepository;
    constructor(nationalityEntityRepository: Repository<NationalityEntity>);
    create(createNationalityDto: CreateNationalityDto): string;
    findAll(): Promise<NationalityEntity[]>;
    findOne(id: number): string;
    update(id: number, updateNationalityDto: UpdateNationalityDto): string;
    remove(id: number): string;
}
