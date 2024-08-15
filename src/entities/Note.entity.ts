import { Column, Entity, ManyToOne, ObjectId, ObjectIdColumn } from "typeorm";
import { UserEntity } from "./User.entity";


@Entity()
export class NoteEntity{
    @ObjectIdColumn()
    _id:ObjectId;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    status: string;
    @ManyToOne(()=>UserEntity,(user)=>user.notes)
    user:UserEntity




}