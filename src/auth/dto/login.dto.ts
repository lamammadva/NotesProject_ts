import { ApiBearerAuth, ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, MinLength } from "class-validator";

export class LoginDto {
    @ApiProperty()
    @Type()
    @MinLength(5)
    @IsString()
    username: string;
    @ApiProperty()
    @Type()
    @MinLength(6)
    @IsString()
    password: string;
}