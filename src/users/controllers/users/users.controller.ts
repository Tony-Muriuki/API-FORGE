import { Body, Controller, Get, Post } from '@nestjs/common';
// import type { Response } from 'express';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get() //Get Decoractor:Method Decorator from nestjs common
  getUsers() {
    //Method to typically return a list of users to the user consuming this endpoint.
    return [{ userName: 'Anson', email: 'anson@anson.com' }];
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

  @Post('')
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }
}
