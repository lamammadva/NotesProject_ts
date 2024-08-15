import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from 'src/entities/Note.entity';
import { NoteService } from './notes.services';

@Module({
  imports:[TypeOrmModule.forFeature([NoteEntity])],
  controllers: [NotesController],
  providers:[NoteService]
})
export class NotesModule {}
