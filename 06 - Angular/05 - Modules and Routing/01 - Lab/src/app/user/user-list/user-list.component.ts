import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent {

  @Input() userArray: IUser[] = [];
  @Output() addUser = new EventEmitter<IUser>();

  constructor(public userService: UserService) {
    console.log(this.userArray);
    debugger;
  }

  addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement): void {
    const { value: name } = userNameInput;
    const { valueAsNumber: age } = userAgeInput;

    this.addUser.emit({ name, age });

    console.log(name, age);

    userNameInput.value = '';
    userAgeInput.value = '';
  }

  name = 'Ben';
  username = 'adam';
  sayHi = (event: string) => alert(`Hi ${event}`);

  visible = true;

  toggleText = () => this.visible = !this.visible;
  classes = ['red', 'fancy'];
  isSpecial = true;
}
