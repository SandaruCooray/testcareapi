import { IsOptional } from 'class-validator';

export class CreateMedicalIssueDto {
  @IsOptional()
  bg: boolean;

  @IsOptional()
  fg: boolean;

  @IsOptional()
  pg: boolean;

  @IsOptional()
  chit: boolean;

  @IsOptional()
  processedBy: string;
}
