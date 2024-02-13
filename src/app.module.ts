import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { StatusResponseInterceptor } from './shared/interceptors/status-response.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['server.env'],
      isGlobal: true,
    }),
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: StatusResponseInterceptor,
    },
  ],
})
export class AppModule { }
