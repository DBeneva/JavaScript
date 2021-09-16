import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(public userService: UserService) {}
  
  name = 'Ben';
  username = 'adam';
  sayHi = (event: string) => alert(`Hi ${event}`);

  visible = true;

  toggleText = () => this.visible = !this.visible;
  classes = ['red', 'fancy'];
  isSpecial = true;

  users: IUser[] | undefined;
  ngOnInit():void {
    this.loadUsers();
  }
  
  loadUsers(search?: string) {
    this.users = undefined;
    this.userService.loadUsers(search).subscribe(
      users => this.users = users,
      
      err => console.log(JSON.stringify(err)));
  }

  reloadBtnHandler() {
    this.loadUsers();
  }

  searchBtnHandler(searchInput: HTMLInputElement): void {
    const { value } = searchInput;
    this.loadUsers(value);
  }
}
