import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';

// Third-party libraries
import * as bcrypt from 'bcrypt';

// services
import { UserService } from './user.service';

// DTOs
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// constant
const SALT_ROUNDS = 20;

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
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      // TODO check if user exists already
      const existingUser = await this.userService.findUserByEmail(
        createUserDto.email,
      );

      if (existingUser) {
        return;
      }
      // TODO hash password
      return this.userService.create(createUserDto);
    } catch (error) {
      return error;
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
