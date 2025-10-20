import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { userName: 'Anson', email: 'anson@anson.com' },
    { userName: 'Beatrice', email: 'bea.kimani@example.com' },
    { userName: 'Tony', email: 'tony.muriuki@example.com' },
    { userName: 'Liam', email: 'liam.ndungu@example.com' },
    { userName: 'Clara', email: 'clara.otieno@example.com' },
    { userName: 'Faith', email: 'faith.wambui@example.com' },
  ];
  fetchUsers() {
    return this.fakeUsers; //mock data
  }

  // CreateUsers Method
  createUser(usersDetails: CreateUserType) {
    this.fakeUsers.push(usersDetails);
    return;
  }

  // FetchUserById
  fetchUserById(id: number) {
    return { id, userName: 'Anson', email: 'anson@anson.com' };
  }
}
