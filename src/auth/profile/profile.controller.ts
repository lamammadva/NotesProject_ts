import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth.guard';
import { ObjectId } from 'mongodb';

@Controller('profile')
@ApiBearerAuth()
@ApiTags('Profile')
export class ProfileController {
    constructor(private profileServices:ProfileService){}
    @Get()
    @UseGuards(AuthGuard)
    findOne(@Req() req:any){
        
        
        
        return this.profileServices.findOne(req.userId)
        
    }
}
