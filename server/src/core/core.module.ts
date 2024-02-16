import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ErrorInterceptor } from './interceptors/exception.interceptor';
import { LoggerInterceptor } from './interceptors/logging.interceptor';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['server.env'],
            isGlobal: true,
        }),
    ],
    providers: [
        { provide: APP_INTERCEPTOR, useClass: ErrorInterceptor },
        { provide: APP_INTERCEPTOR, useClass: LoggerInterceptor },
    ],
    exports: [
        ConfigModule
    ]
})
export class CoreModule { }