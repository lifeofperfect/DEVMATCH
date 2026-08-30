import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { ProfilesService } from './profiles.service.js';
import type {Profile} from './entities/profile.entity.ts'
import type { UUID } from 'crypto';
import { ProfilesGuard } from './profiles.guard.js';

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
    findOne(@Param('id', ParseUUIDPipe) id:UUID):Profile | undefined {
        return this.profileService.findOne(id);
    }

    @Post()
    create(@Body(new ValidationPipe) createProfile:CreateProfileDto):Profile{
        return this.profileService.create(createProfile);   
    }

    @Put(":id")
    update(@Param("id") id:string, @Body() updateProfile:UpdateProfileDto):Profile | {} {
        return this.profileService.update(id, updateProfile);
    }

    @Delete(':id')
    @UseGuards(ProfilesGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id:string):void{
        this.profileService.remove(id);
    }

}
