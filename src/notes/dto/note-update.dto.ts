import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsOptional, IsString, MinLength } from "class-validator";
import { NoteStatus } from "./note-create.dto";


export class UpdateNoteDto {
    @ApiProperty()
    @Type()
    @MinLength(3)
    @IsOptional()
    @IsString()
    title: string;
    @ApiProperty()
    @Type()
    @IsOptional()
    @MinLength(3)
    @IsString()
    description: string;
    @ApiProperty()
    @IsOptional()
    @Type()
    @IsEnum(NoteStatus)
    status: NoteStatus;


}