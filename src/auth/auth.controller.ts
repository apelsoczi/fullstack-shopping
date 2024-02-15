import {
    Controller,
    Post,
    Body,
    HttpException,
    HttpStatus,
    ValidationPipe,
    Get,
    Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { UserJwt } from './entities/user-jwt.entity.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Public } from './decorators/public.decorator';

@ApiTags("auth")
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly jwtService: JwtService,
    ) { }

    @Public()
    @Post('register')
    @ApiOperation({ description: "Register a user account" })
    async register(@Body(new ValidationPipe()) dto: RegisterAuthDto): Promise<UserJwt> {
        try {
            const user = await this.authService.register(dto);
            return {
                token: this.accessToken(user.id, user.username)
            }
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            } else {
                throw new HttpException(error?.message || "/auth/register", HttpStatus.BAD_REQUEST);
            }
        }
    }

    @Public()
    @Post('login')
    @ApiOperation({ description: "Login to a user account" })
    async login(@Body(new ValidationPipe()) dto: LoginAuthDto): Promise<UserJwt> {
        try {
            const user = await this.authService.login(dto);
            return {
                token: this.accessToken(user.id, user.username)
            }
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            } else {
                throw new HttpException(error?.message || "/auth/login", HttpStatus.BAD_REQUEST);
            }
        }
    }

    @Get('verify')
    getProfile(@Request() request: Request) {
        return request['user']
    }

    private accessToken(userId: string, username: string): string {
        const payload = { sub: userId, username };
        return this.jwtService.sign(payload)
    }

}
