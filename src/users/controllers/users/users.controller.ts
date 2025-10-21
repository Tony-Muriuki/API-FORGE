import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
// import type { Response } from 'express';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get() //Get Decoractor:Method Decorator from nestjs common
  getUsers() {
    // console.log(sortDesc);
    //Method to typically return a list of users to the user consuming this endpoint.
    return this.usersService.fetchUsers();
  }
  @Get('posts')
  getUsersPosts() {
    return [
      {
        userName: 'Anson',
        email: 'anson@anson.com',
        posts: [
          {
            id: 1,
            title: 'post 1',
          },
          {
            id: 2,
            title: 'post 2',
          },
          {
            id: 3,
            title: 'post 3',
          },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'post 1',
        comments: [],
      },
    ];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(isNaN(userData.age));
    return this.usersService.createUser(userData);
  }
  @Get(':id') //Passing in the name of the parameter
  getUserById(
    @Param('id', ParseIntPipe) id: number,
    /*Type annotate the arguement*/
  ) {
    console.log(id);
    const user = this.usersService.fetchUserById(id);
    if (!user)
      throw new HttpException('User Not found', HttpStatus.BAD_REQUEST);
    return user;
  }
}
