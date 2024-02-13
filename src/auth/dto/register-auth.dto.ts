import {
    IsString,
    IsNotEmpty,
    IsStrongPassword,
    MinLength,
    MaxLength,
    Matches
} from 'class-validator';

export class RegisterAuthDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(12)
    @Matches("^(?!.*(admin|root))[a-zA-Z0-9._-]{6,20}$")
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(32)
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
    password: string;

    @IsString()
    @IsNotEmpty()
    first: string;

    @IsString()
    @IsNotEmpty()
    last: string;

}