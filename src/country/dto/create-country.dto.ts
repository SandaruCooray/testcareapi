import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  countryHead: string;

  @IsNotEmpty()
  short: string;

  @IsNotEmpty()
  reference: string;
}
