// Nest libraries
import { ApiProperty } from '@nestjs/swagger';

// Third-party libraries
import {
  IsNotEmpty,
  Length,
  IsString,
  IsEmail,
  MinLength,
} from 'class-validator';

// DTO
export class LoginUserDto {
  @ApiProperty({
    type: String,
    description: 'User email. Required property.',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Length(3, 100)
  email: string;

  @ApiProperty({
    type: String,
    description: 'User password. Required property.',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
