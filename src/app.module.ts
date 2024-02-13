import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { StatusResponseInterceptor } from './shared/interceptors/status-response.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['server.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [User],
      synchronize: false,
    })
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: StatusResponseInterceptor,
    },
  ],
})
export class AppModule { }
