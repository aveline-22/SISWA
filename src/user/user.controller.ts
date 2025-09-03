import { Controller, Get, Param, Post, Put, Req, Delete, Query } from '@nestjs/common';
import type { Request } from 'express';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private UserService: UserService){}
  
  @Get('all')
  findAll(@Req() request: Request) {
    return this.UserService.findAll;
  }


  @Get(':name')
  findOne(@Param() params: any): string {
    return `This action returns ${params.name} user`;
  }

  @Post('abc')
  create(): String {
    return 'This action adds a new user';

  }
  @Put(':id')
  update(@Param('id') id: string): string {
    return `This action update user ide ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `This action delete user id ${id}`;
  }

  //MATERI SELANJUTANYA

  @Get()
async find(@Query('age') age: number, @Query('breed') breed: string) {
  return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
}

@Post()
async createOne(@Query('age') age: number, @Query('breed') breed: string) {
  return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
}
@Put()
async updateOne(@Query('age') age: number, @Query('breed') breed: string) {
  return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
}
@Delete()
async deleteOne(@Query('age') age: number, @Query('breed') breed: string) {
  return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
}


}
