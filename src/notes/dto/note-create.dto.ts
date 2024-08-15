import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsMongoId, IsOptional, IsString, MinLength } from "class-validator";

export enum NoteStatus {
    Active = "active",
    Inactive = "inactive"
}


export class CreateNoteDto{
    @ApiProperty({})
    @Type()
    @MinLength(2)
    @IsString()
    @IsOptional()
    title: string;

    @ApiProperty({})
    @Type()
    @MinLength(5)
    @IsOptional()
    @IsString()
    description: string;

    @ApiProperty({})
    @Type()
    @IsOptional()
    @IsEnum(NoteStatus)
    status: NoteStatus;


    


}