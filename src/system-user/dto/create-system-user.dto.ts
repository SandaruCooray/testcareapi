import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSystemUserDto {
  @IsNotEmpty()
  username: string;

  @IsOptional()
  password: string;

  @IsNotEmpty()
  level: string;
}
