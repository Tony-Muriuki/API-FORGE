/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Inside ValidateCreateUserPipe');
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException(
        'Invalid Data Type arguement for age property.Expected Number',
        HttpStatus.BAD_REQUEST,
      );
    } else return { ...value, age: parseAgeToInt };

    return value;
  }
}
