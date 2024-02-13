import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PasswordService } from './password.service';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly passwordService: PasswordService
    ) { }

    async register(dto: RegisterAuthDto): Promise<User> {
        let user;
        user = await this.userRepository.findOneBy({ username: dto.username })
        if (user) {
            throw new Error("username is not available")
        }
        user = this.userRepository.create({
            username: dto.username,
            password: await this.passwordService.hashPassword(dto.password),
            first: dto.first,
            last: dto.last
        })
        return user
    }

}
