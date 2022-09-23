import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Res,
  Req,
  Delete,
  ValidationPipe,
  UsePipes,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// Third-party libraries
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

// services
import { UserService } from './user.service';

// DTOs
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// constant
const SALT_ROUNDS = 20;

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Create a new user
   * @param createUserDto
   * @returns
   */
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      const existingUser = await this.userService.findUserByEmail(
        createUserDto.email,
      );
      if (existingUser) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: 'User already exists',
        });
      }
      const hashedPwd = await bcrypt.hash(createUserDto.password, SALT_ROUNDS);
      const userData: CreateUserDto = Object.assign({}, createUserDto, {
        password: hashedPwd,
      });
      const newUser = await this.userService.create(userData);
      return res.status(HttpStatus.CREATED).json({
        message: 'User created successfully',
        user: newUser,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
