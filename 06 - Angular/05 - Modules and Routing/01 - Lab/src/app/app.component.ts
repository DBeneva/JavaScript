import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(public userService: UserService) {}
  
  name = 'Ben';
  username = 'adam';
  sayHi = (event: string) => alert(`Hi ${event}`);

  visible = true;

  toggleText = () => this.visible = !this.visible;
  classes = ['red', 'fancy'];
  isSpecial = true;
}
