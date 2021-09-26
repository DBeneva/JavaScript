import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }
  userArray: IUser[] | undefined;
  loadUsers(search: string = '') {
    const query = search ? `?email_like=${search}` : '';
    return this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users${query}`).subscribe(users => this.userArray = users);
  }

  loadUser(id: number) {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
