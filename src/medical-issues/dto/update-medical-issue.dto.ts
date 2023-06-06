import { PartialType } from '@nestjs/swagger';
import { CreateMedicalIssueDto } from './create-medical-issue.dto';

export class UpdateMedicalIssueDto extends PartialType(CreateMedicalIssueDto) {}
