import { Component } from '@angular/core';
import { emailValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  emailValidator = emailValidator;
  phoneCodes = ['+359', '+44', '+41', '+1'];
   
  constructor() { }
}
