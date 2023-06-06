import { PartialType } from '@nestjs/swagger';
import { CreateResultEntryDto } from './create-result-entry.dto';

export class UpdateResultEntryDto extends PartialType(CreateResultEntryDto) {}
