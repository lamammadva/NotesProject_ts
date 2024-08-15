import { UserServices } from "src/users/users.services";
import { RegisterDto } from "./dto/register.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from 'bcrypt'
import { ObjectId } from "mongodb";
import { JwtService } from "@nestjs/jwt";
import { ApiBearerAuth } from "@nestjs/swagger";
@Injectable()
export class AuthServices{
    constructor(private userServices:UserServices,private jwtService: JwtService){}
    async register(params:RegisterDto){
        let user = await this.userServices.create(params)
        return user

    }
    @ApiBearerAuth()
    async login(params:LoginDto){
        let user = await this.userServices.findOne({username:params.username},['_id','password','username','name','surname'])
        if(!user){
            throw new HttpException("login or password id wrong" , HttpStatus.BAD_REQUEST)
        }
        let checkpassword =  await bcrypt.compare(params.password,user.password)
        if(!checkpassword){
            throw new HttpException("login or password id wrong" , HttpStatus.BAD_REQUEST)
        }
        let token  = this.jwtService.sign({userId:user._id})
        

        
        

        return {
            status:true,
            token,
        }
        
        
        
        
        
    }
    
    

    }

    

