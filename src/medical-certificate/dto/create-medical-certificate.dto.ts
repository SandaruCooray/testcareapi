import { IsNotEmpty } from 'class-validator';

export class CreateMedicalCertificateDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  downPayment: string;

  @IsNotEmpty()
  medicalType: string;
}
