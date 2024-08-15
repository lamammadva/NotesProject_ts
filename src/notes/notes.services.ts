import { InjectRepository } from "@nestjs/typeorm";
import { NoteEntity } from "src/entities/Note.entity";
import { Repository } from "typeorm";
import { NoteStatus } from "./dto/note-create.dto";
import { ObjectId } from "mongodb";
import { UpdateNoteDto } from "./dto/note-update.dto";

export class NoteService {
    constructor(
        @InjectRepository(NoteEntity)
        private todoRepo: Repository<NoteEntity>) { }

    notes() {
        return this.todoRepo.find({})
    }
    async create(title: string, description: string) {
        let note = {
            title,
            description,
            status: NoteStatus.Active
        }
        let result = await this.todoRepo.save(note)
        return result


    }
    async delete(id: string) {
        await this.todoRepo.delete({ _id: new ObjectId(id) })
        return {
            message: 'delted succesfully'
        }


    }
    async update(id: string, body: UpdateNoteDto) {
        let result = await this.todoRepo.update({ _id: new ObjectId(id) }, body)
        return result

    }
}
