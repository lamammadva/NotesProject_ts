import { ApiBearerAuth, ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, MinLength } from "class-validator";
import { LoginDto } from "./login.dto";

export class RegisterDto extends LoginDto {
    @ApiProperty()
    @Type()
    @IsString()
    firstname: string;
    @ApiProperty()
    @Type()
    @IsString()
    surname: string;
   
}