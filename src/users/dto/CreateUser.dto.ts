import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  //Here we are going to define all the properties we are going to need
  @IsNotEmpty()
  userName: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  age: number;
}
