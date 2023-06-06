import { CreateCityDto } from '../dto/create-city.dto';
import { UpdateCityDto } from '../dto/update-city.dto';
import { CityEntity } from '../entities/city.entity';
import { Repository } from 'typeorm';
export declare class CityService {
    private cityEntityRepository;
    constructor(cityEntityRepository: Repository<CityEntity>);
    create(createCityDto: CreateCityDto): string;
    findAll(): Promise<CityEntity[]>;
    findOne(id: number): string;
    update(id: number, updateCityDto: UpdateCityDto): string;
    remove(id: number): string;
}
