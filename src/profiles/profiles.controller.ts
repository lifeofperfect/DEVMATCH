import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { ProfilesService } from './profiles.service.js';
import type {Profile} from './entities/profile.entity.ts'

@Controller('profiles')
export class ProfilesController {
    /**
     *
     */
    constructor(private profileService:ProfilesService) {
        
        
    }

    //Get profiles
    @Get()
    findAll():Profile[] {
        return this.profileService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string):Profile | undefined {
        return this.profileService.findOne(id);
    }

    @Post()
    create(@Body() createProfile:CreateProfileDto):Profile{
        return this.profileService.create(createProfile);   
    }

    @Put(":id")
    update(@Param("id") id:string, @Body() updateProfile:UpdateProfileDto):Profile | {} {
        return this.profileService.update(id, updateProfile);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id:string):void{
         this.profileService.remove(id);
    }

}
