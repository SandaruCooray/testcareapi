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

export class UpdateMedicalRegisterDto {
  @IsOptional()
  passport: string;

  @IsOptional()
  serialNo: string;

  @IsOptional()
  gccNo: string;

  @IsOptional()
  cmbNo: string;

  @IsOptional()
  refNo: string;

  @IsOptional()
  honorific: number;

  @IsOptional()
  firstName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  address: string;

  @IsOptional()
  sex: SEX;

  @IsOptional()
  status: USER_STATUS;

  @IsOptional()
  doctor: number;

  @IsOptional()
  birthday: Date;

  @IsOptional()
  age: number;

  @IsOptional()
  placeOfIssue: string;

  @IsOptional()
  place_of_birth: number;

  @IsOptional()
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

  @IsOptional()
  medical: number;

  @IsOptional()
  agency: number;

  @IsOptional()
  country: number;

  @IsOptional()
  registeredDate: Date;

  @IsOptional()
  company: string;

  @IsOptional()
  overAge: boolean;

  @IsOptional()
  recipientDate: Date;

  @IsOptional()
  medical_certificate: number;
}
