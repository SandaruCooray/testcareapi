import { PartialType } from '@nestjs/swagger';
import { CreateLabRemarkDto } from './create-lab-remark.dto';

export class UpdateLabRemarkDto extends PartialType(CreateLabRemarkDto) {}
