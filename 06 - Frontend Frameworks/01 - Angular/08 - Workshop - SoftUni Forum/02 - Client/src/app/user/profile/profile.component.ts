import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = this.userService.user;
  userTel = `${this.user.tel.slice(0, -9)} ${this.user.tel.slice(-9, -6)} ${this.user.tel.slice(-6, -3)} ${this.user.tel.slice(-3)}`;
  isLoading = true;

  constructor(private userService: UserService) {
    this.userService.getProfileInfo().subscribe(() => {
      this.isLoading = false;
    });
  }
}
