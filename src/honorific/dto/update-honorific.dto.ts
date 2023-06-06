import { PartialType } from '@nestjs/swagger';
import { CreateHonorificDto } from './create-honorific.dto';

export class UpdateHonorificDto extends PartialType(CreateHonorificDto) {}
