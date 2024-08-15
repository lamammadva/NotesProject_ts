import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NoteService } from './notes.services';
import { CreateNoteDto } from './dto/note-create.dto';
import { UpdateNoteDto } from './dto/note-update.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('notes')
@ApiTags("Notes")
export class NotesController {
    constructor(private NoteSevice:NoteService ){}
    @Get()
    notes(){
        return this.NoteSevice.notes()
    }
    @Post(':userId')
    create(@Param('userId') userId:string, @Body() body:CreateNoteDto){
        return this.NoteSevice.create(
           body.title,
           body.description

        )

    }
    @Delete(':id')
    delete(@Param('id') id:string){
        return this.NoteSevice.delete(id)

    }
    @Post(':id')
    update(@Param('id') id:string, @Body() body:UpdateNoteDto){
        return  this.NoteSevice.update(id,body)


    }


}
