import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import configuration from './common/configs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
      expandVariables: true,
    }),
    PrismaModule,
    UserModule,
  ],
})
export class AppModule {}
