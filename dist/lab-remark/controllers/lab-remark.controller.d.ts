import { LabRemarkService } from '../services/lab-remark.service';
import { CreateLabRemarkDto } from '../dto/create-lab-remark.dto';
import { UpdateLabRemarkDto } from '../dto/update-lab-remark.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
export declare class LabRemarkController {
    private readonly labRemarkService;
    constructor(labRemarkService: LabRemarkService);
    create(id: string, createLabRemarkDto: CreateLabRemarkDto): Promise<CommonResponseHandler>;
    findAll(): string;
    update(id: string, updateLabRemarkDto: UpdateLabRemarkDto): Promise<CommonResponseHandler>;
    remove(id: string): string;
}
