// Nest libraries
import { Module } from '@nestjs/common';

// services
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';

// controller
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
