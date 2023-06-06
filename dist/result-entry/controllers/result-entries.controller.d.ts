import { ResultEntriesService } from '../services/result-entries.service';
import { UpdateResultEntryDto } from '../dto/update-result-entry.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { CreateResultEntryDto } from '../dto/create-result-entry.dto';
export declare class ResultEntriesController {
    private readonly resultEntriesService;
    constructor(resultEntriesService: ResultEntriesService);
    create(createResultEntryDto: CreateResultEntryDto): Promise<CommonResponseHandler>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateResultEntryDto: UpdateResultEntryDto): Promise<CommonResponseHandler>;
    remove(id: string): string;
}
