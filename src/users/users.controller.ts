import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserServices } from './users.services';
import { ApiTags } from '@nestjs/swagger';


@Controller('users')
@ApiTags("User")
export class UsersController {
    constructor(private UserServices:UserServices) {}
    @Get()
    users(){
        return this.UserServices.users()
    }
    
  
}
