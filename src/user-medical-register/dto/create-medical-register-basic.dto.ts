import { IsNotEmpty, IsOptional } from 'class-validator';

export enum USER_STATUS {
  SINGLE = 'single',
  MARRIED = 'married',
  WIDOWED = 'widowed',
}

export enum SEX {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export class CreateMedicalRegisterBasicDto {
  @IsNotEmpty()
  passport: string;

  @IsNotEmpty()
  gccNo: string;

  @IsOptional()
  cmbNo: string;

  @IsNotEmpty()
  honorific: number;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  sex: SEX;

  @IsNotEmpty()
  status: USER_STATUS;

  @IsNotEmpty()
  doctor: number;

  @IsNotEmpty()
  birthday: Date;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  placeOfIssue: string;

  @IsNotEmpty()
  place_of_birth: number;

  @IsNotEmpty()
  nationality: number;

  @IsOptional()
  remark: string;

  @IsOptional()
  paymentType: string;

  @IsOptional()
  treatments: number;

  @IsOptional()
  fingerPrintRef: string;

  @IsOptional()
  position: number;

  @IsOptional()
  photo: string;

  @IsNotEmpty()
  medicalType: string;

  @IsNotEmpty()
  agency: number;

  @IsNotEmpty()
  country: number;

  @IsNotEmpty()
  registeredDate: Date;

  @IsOptional()
  company: string;

  @IsOptional()
  overAge: boolean;

  @IsOptional()
  recipientDate: Date;

  @IsOptional()
  medicalCertificates: string[];
}
