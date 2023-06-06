import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateDoctorRequest {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  telePhone: number;

  @IsOptional()
  fax: string;

  @IsNotEmpty()
  commissionRate: string;
}
