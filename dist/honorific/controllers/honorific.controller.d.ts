import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { HonorificService } from '../services/honorific.service';
import { CreateHonorificDto } from '../dto/create-honorific.dto';
import { UpdateHonorificDto } from '../dto/update-honorific.dto';
export declare class HonorificController {
    private readonly honorificService;
    constructor(honorificService: HonorificService);
    create(id: string, createHonorificDto: CreateHonorificDto): Promise<void>;
    findAll(): Promise<CommonResponseHandler>;
    update(id: string, updateHonorificDto: UpdateHonorificDto): Promise<void>;
    remove(id: string): string;
}
