import { PartialType } from '@nestjs/swagger';
import { CreateDoctorRemarkDto } from './create-doctor-remark.dto';

export class UpdateDoctorRemarkDto extends PartialType(CreateDoctorRemarkDto) {}
