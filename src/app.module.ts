import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['server.env'],
      isGlobal: true,
    }),
  ],
})
export class AppModule { }
