import { PartialType } from '@nestjs/swagger';
import { CreatPositionDto } from './create-position.dto';

export class UpdatePositionDto extends PartialType(CreatPositionDto) {}
