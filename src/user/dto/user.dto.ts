import { ApiProperty } from "@nestjs/swagger"

export class UserDto {

    @ApiProperty({ example: 'jdoe' })
    username: String

    @ApiProperty({ example: 'john' })
    first: String

    @ApiProperty({ example: 'doe' })
    last: String

    constructor(username: string, first: string, last: string) {
        this.username = username;
        this.first = first;
        this.last = last;
    }

}