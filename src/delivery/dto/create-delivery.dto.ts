import { IsOptional } from 'class-validator';

export class CreateDeliveryDto {
  @IsOptional()
  deliveryDateTime: Date;

  @IsOptional()
  remark: string;

  @IsOptional()
  medicalAmount: string;

  @IsOptional()
  paidAmount: string;

  @IsOptional()
  balanceToPay: string;

  @IsOptional()
  processedBy: string;

  @IsOptional()
  reference: string;

  @IsOptional()
  bg: boolean;

  @IsOptional()
  fg: boolean;

  @IsOptional()
  pg: boolean;

  @IsOptional()
  chit: boolean;
}
