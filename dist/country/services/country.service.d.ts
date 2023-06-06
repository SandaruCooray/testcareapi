import { CreateCountryDto } from '../dto/create-country.dto';
import { UpdateCountryDto } from '../dto/update-country.dto';
import { CountryEntity } from '../entities/country.entity';
import { Repository } from 'typeorm';
export declare class CountryService {
    private countryEntityRepository;
    constructor(countryEntityRepository: Repository<CountryEntity>);
    create(createCountryDto: CreateCountryDto): Promise<CreateCountryDto & CountryEntity>;
    findAll(): Promise<CountryEntity[]>;
    findOne(id: number): Promise<CountryEntity>;
    update(id: number, updateCountryDto: UpdateCountryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
