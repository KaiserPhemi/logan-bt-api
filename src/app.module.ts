// Nest libraries
import { Module } from '@nestjs/common';

// modules
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

// services
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UserModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
