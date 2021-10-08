import { Component } from '@angular/core';
import { userInfo } from 'os';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = this.userService.user;
  userTel = `${this.user.tel.slice(0, -9)} ${this.user.tel.slice(-9, -6)} ${this.user.tel.slice(-6, -3)} ${this.user.tel.slice(-3)}`;

  constructor(private userService: UserService) { }
}
