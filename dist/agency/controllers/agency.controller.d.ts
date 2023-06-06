import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { AgencyService } from '../services/agency.service';
import { CreateAgencyDto } from '../dto/create-agency.dto';
import { UpdateAgencyDto } from '../dto/update-agency.dto';
export declare class AgencyController {
    private readonly agencyService;
    constructor(agencyService: AgencyService);
    create(createAgencyDto: CreateAgencyDto): Promise<CommonResponseHandler>;
    findAll(): Promise<CommonResponseHandler>;
    findOne(id: string): Promise<import("../entities/agency.entity").AgencyEntity>;
    update(id: string, updateAgencyDto: UpdateAgencyDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
