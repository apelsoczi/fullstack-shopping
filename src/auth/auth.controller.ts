import {
    Controller,
    Post,
    Body,
    HttpException,
    HttpStatus,
    ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { UserJwt } from './entities/user-jwt.entity.dto';

@ApiTags("auth")
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly jwtService: JwtService,
    ) { }

    @Post('register')
    @ApiOperation({ description: "Register a user account" })
    async register(@Body(new ValidationPipe()) dto: RegisterAuthDto): Promise<UserJwt> {
        try {
            const user = await this.authService.register(dto);
            const payload = { sub: user.id, username: user.username };
            this.jwtService
            const accessToken = this.jwtService.sign(payload)
            return {
                token: accessToken
            }
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            } else {
                throw new HttpException(error?.message || "/auth/register", HttpStatus.BAD_REQUEST);
            }
        }
    }

}
