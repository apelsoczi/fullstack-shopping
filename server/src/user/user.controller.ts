import { Controller, Get, Request } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    @ApiOperation({ description: "Get the user profile" })
    async findOne(@Request() request: Request): Promise<UserDto> {
        const userId = request['user'].id as string
        const user = await this.userService.findOne(userId);
        return {
            username: user.username,
            first: user.first,
            last: user.last
        };
    }

}
