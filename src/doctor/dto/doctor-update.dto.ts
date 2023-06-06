import { PartialType } from '@nestjs/swagger';
import { CreateDoctorRequest } from './doctor-create.dto';

export class UpdateDoctorDto extends PartialType(CreateDoctorRequest) {}
