import {
    IsDecimal,
    IsNotEmpty,
    IsNumber,
    IsString,
    Min,
} from 'class-validator';

export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number;

    @IsNotEmpty()
    @Min(0)
    stock: number;

}