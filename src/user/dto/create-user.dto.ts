import { IsString, IsEmail, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @IsNotEmpty()
  email_verified: boolean;

  @IsNotEmpty()
  @IsBoolean()
  deleted: boolean;
}
