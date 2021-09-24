import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      name: 'Ivan 2',
      age: 21
    },
    {
      name: 'Ivan 3',
      age: 23,
      courses: [3, 4]
    }
  ];

  constructor() { }
 
  addNewUserHandler(newUser: IUser): void {
    this.users = this.users.concat(newUser);
  }
}
