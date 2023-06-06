import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateGalleryDto {
  @IsNotEmpty()
  passportNo: string;

  @IsOptional()
  imgPath: string;

  @IsOptional()
  regDate: Date;
}
