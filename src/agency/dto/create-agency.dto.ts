import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  isNotEmpty,
} from 'class-validator';

export class CreateAgencyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  telPhone: string;

  @IsOptional()
  short: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  address: string;
}
