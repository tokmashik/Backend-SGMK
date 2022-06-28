import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from 'src/modules/users/service/user/user.service'; 
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/modules/users/dto/update-user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }
  
    @Get()
    findAll() {
      return this.userService.findAll();
    }
  
    @Get(':idUser')
    findOneById(@Param('idUser') idUser: number) {
      return this.userService.findOneById(+idUser);  
    }
  
    @Patch(':idUser')
    update(@Param('idUser') idUser: number, @Body() updateUserDto: UpdateUserDto) {
      return this.userService.update(+idUser, updateUserDto);
    }
  
    @Delete(':idUser')
    remove(@Param('idUser') idUser: number) {
      return this.userService.remove(+idUser);
    }

}
