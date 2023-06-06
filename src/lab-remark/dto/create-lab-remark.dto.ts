import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateLabRemarkDto {
  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;

  @IsOptional()
  remark: string;

  @IsOptional()
  mmr: boolean;
}
