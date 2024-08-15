import { InjectRepository } from "@nestjs/typeorm";
import { ObjectId } from "mongodb";
import { UserEntity } from "src/entities/User.entity";
import { Repository } from "typeorm";

export class ProfileService{
    constructor(@InjectRepository(UserEntity) private userRepo:Repository<UserEntity>){}
    
    findOne(_id:ObjectId){
        
        return this.userRepo.findOne({where:{_id:new ObjectId(_id)}});


    }
}