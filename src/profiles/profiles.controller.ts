import { Controller, Get, Param, Query } from '@nestjs/common';

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
}
