import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entities/User.entity";
import { FindOptionsWhere, Repository } from "typeorm";
export type UserKey = keyof UserEntity;
@Injectable()
export class UserServices {
    constructor(
        @InjectRepository(UserEntity)
        private userRepo: Repository<UserEntity>
    ) { }
    users() {
        return this.userRepo.find({});
    }
    findOne(where:FindOptionsWhere<UserEntity>,select?:UserKey[]){
        
        return this.userRepo.findOne({where,select});
    }
    async create(params: Partial<UserEntity>) {
        let checkuser = await this.findOne({ username: params.username })
        if(checkuser){
            throw new ConflictException('User already exists')
        }
        let user = await this.userRepo.create(params)
        await user.save()
        return user

    }
    

}