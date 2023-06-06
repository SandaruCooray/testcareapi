import { IsOptional } from 'class-validator';

export enum MEDICAL_STATUS {
  UNFIT = 'unfit',
  FIT = 'fit',
  TEMPORARY_UNFIT = 'temporary_unfit',
}

export class CreateResultEntryDto {
  @IsOptional()
  result: any;

  @IsOptional()
  healthStatus: MEDICAL_STATUS;

  @IsOptional()
  printed: any;
}
