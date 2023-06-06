import { NationalityService } from '../services/nationality.service';
import { CreateNationalityDto } from '../dto/create-nationality.dto';
import { UpdateNationalityDto } from '../dto/update-nationality.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
export declare class NationalityController {
    private readonly nationalityService;
    constructor(nationalityService: NationalityService);
    create(createNationalityDto: CreateNationalityDto): string;
    findAll(): Promise<CommonResponseHandler>;
    findOne(id: string): Promise<string>;
    update(id: string, updateNationalityDto: UpdateNationalityDto): string;
    remove(id: string): string;
}
