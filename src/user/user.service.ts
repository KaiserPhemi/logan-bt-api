// Nest libraries
import { Injectable } from '@nestjs/common';

// third-party libraries
import { UsersTable, Prisma } from '@prisma/client';

// services
import { PrismaService } from 'src/prisma/prisma.service';

// DTOs
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  /**
   * Addd a new user
   * @param createUserDto
   * @returns
   */
  async create(createUserDto: CreateUserDto): Promise<UsersTable> {
    try {
      const newUser = await this.prisma.usersTable.create({
        data: { ...createUserDto },
      });
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Fetch all users
   */
  async findAll(): Promise<UsersTable[]> {
    try {
      const users = await this.prisma.usersTable.findMany();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findUserByEmail(email: string): Promise<UsersTable | null> {
    try {
      const existingUser = await this.prisma.usersTable.findUnique({
        where: { email: email },
      });
      return existingUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Fetch a user by user id
   * @param id
   * @returns
   */
  async findOne(id: number) {
    try {
      const existingUser = await this.prisma.usersTable.findUnique({
        where: { id },
      });
      return existingUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
