import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  @ViewChild('form', { read: NgForm, static: false }) form: NgForm;
  phoneCodes = ['+359', '+44', '+41', '+1'];
  emailValidator = emailValidator;
  
  constructor() { }
}
