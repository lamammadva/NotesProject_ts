import { BeforeInsert, Column, Entity, ManyToOne, ObjectId, ObjectIdColumn, OneToMany } from "typeorm";
import { NoteEntity } from "./Note.entity";
import { MyBaseEntity } from "./Base.entity";
import * as bcrypt from 'bcrypt'
@Entity()
export class UserEntity extends MyBaseEntity{

    @Column()
    username: string;
    @Column()
    name: string;
    @Column()
    surname: string;
    @Column()
    password: string;
    @OneToMany(()=>NoteEntity ,(notes)=>notes.user)
    notes:NoteEntity[]
    @BeforeInsert()
    async beforeInsert(){
        this.password = await bcrypt.hash(this.password,10)
    }
}