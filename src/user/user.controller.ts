import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Res,
  HttpException,
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
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * Fetch all users
   * @param res
   * @returns
   */
  @Get()
  async findAll(@Res() res: Response) {
    try {
      const users = await this.userService.findAll();
      return res.status(HttpStatus.OK).json({
        message: 'Users fetched successfully',
        users,
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try {
      const existingUser = await this.userService.findOne(id);
      return res.status(HttpStatus.OK).json({
        message: 'User fetched successfully',
        user: existingUser,
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response,
  ) {
    try {
      const updatedUser = await this.userService.update(+id, updateUserDto);
      return res.status(HttpStatus.OK).json({
        message: 'User updated successfully',
        user: updatedUser,
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * Delete a user
   * @param id
   * @param res
   * @returns
   */
  @Delete(':id')
  async remove(@Param('id') id: number, @Res() res: Response) {
    try {
      const deletedUser = await this.userService.remove(+id);
      return res.status(HttpStatus.OK).json({
        message: 'User deleted successfully',
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
