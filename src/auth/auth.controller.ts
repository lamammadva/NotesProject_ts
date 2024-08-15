import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthServices } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private authServices:AuthServices){}

    @ApiBearerAuth()
    @Post('/register')
    register(@Body() body:RegisterDto){
        return this.authServices.register(body)
        

    }
    @Post('/login')
    login(@Body() body:LoginDto){
        
        return this.authServices.login(body)
    
    }

}
