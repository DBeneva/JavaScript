import { Component } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private userService: UserService) { }
  
  get isLogged(): boolean {
    return !!this.userService.user;
  }
}
