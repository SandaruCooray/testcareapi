import { IsOptional } from 'class-validator';

export class CreateMmrPaymentDto {
  @IsOptional()
  public paymentDate: Date;

  @IsOptional()
  public total: string;

  @IsOptional()
  public status: boolean;
}
