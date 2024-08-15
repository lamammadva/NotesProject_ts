import { ObjectId } from "mongodb";
import { BaseEntity, Column, CreateDateColumn, ObjectIdColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



export class MyBaseEntity extends BaseEntity{
    @ObjectIdColumn()
    _id:ObjectId
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    updated_at:Date
}