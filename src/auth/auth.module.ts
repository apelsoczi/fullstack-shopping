import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PasswordService } from './password.service';

@Module({
    imports: [UserModule],
    controllers: [AuthController],
    providers: [
        AuthService,
        PasswordService,
    ],
})
export class AuthModule { }
