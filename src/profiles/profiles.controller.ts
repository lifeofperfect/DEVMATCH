import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';

@Controller('profiles')
export class ProfilesController {

    //Get profiles
    @Get()
    findAll(@Query('location') location:string) {
        return [{location}];
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return {id}
    }

    @Post()
    create(@Body() createProfile:CreateProfileDto){
        return {
            name: createProfile.name,
            description:createProfile.description
        }
    }

    @Put(":id")
    update(@Param("id") id:string, @Body() updateProfile:UpdateProfileDto){
        return {
            id,
            ...updateProfile
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id:string) {
         
    }

}
