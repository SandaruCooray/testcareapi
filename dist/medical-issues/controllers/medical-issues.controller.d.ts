import { MedicalIssuesService } from '../services/medical-issues.service';
import { CreateMedicalIssueDto } from '../dto/create-medical-issue.dto';
import { UpdateMedicalIssueDto } from '../dto/update-medical-issue.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
export declare class MedicalIssuesController {
    private readonly medicalIssuesService;
    constructor(medicalIssuesService: MedicalIssuesService);
    create(createMedicalIssueDto: CreateMedicalIssueDto): Promise<CommonResponseHandler>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMedicalIssueDto: UpdateMedicalIssueDto, user: any): Promise<CommonResponseHandler>;
    remove(id: string): string;
}
