import { Repository } from 'typeorm';
import { AgencyEntity } from '../entities/agency.entity';
import { CreateAgencyDto } from '../dto/create-agency.dto';
import { UpdateAgencyDto } from '../dto/update-agency.dto';
export declare class AgencyService {
    private agencyEntityRepository;
    constructor(agencyEntityRepository: Repository<AgencyEntity>);
    create(createAgencyDto: CreateAgencyDto): Promise<CreateAgencyDto & AgencyEntity>;
    findAll(): Promise<AgencyEntity[]>;
    findOne(id: number): Promise<AgencyEntity>;
    update(id: number, updateAgencyDto: UpdateAgencyDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
