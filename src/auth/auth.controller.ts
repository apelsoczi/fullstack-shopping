import {
    Controller,
    Post,
    Body,
    HttpException,
    HttpStatus,
    ValidationPipe,
    HttpCode
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/user/dto/user.dto';

@ApiTags("auth")
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ description: "Register a user account" })
    async register(@Body(new ValidationPipe()) dto: RegisterAuthDto): Promise<UserDto> {
        try {
            const user = await this.authService.register(dto);
            return user
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            } else {
                throw new HttpException('Registration failed', HttpStatus.BAD_REQUEST);
            }
        }
    }

}
