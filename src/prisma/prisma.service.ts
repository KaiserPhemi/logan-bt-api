// Nest libraries
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';

// third-party libraries
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  /**
   * Connects to db
   */
  async onModuleInit() {
    await this.$connect();
  }

  /**
   * Shutdowns
   * @param app
   */
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
