import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { fullNameValidator, passwordValidator, phoneValidator, sameValue, sameValueAsFactory, urlValidator } from '../shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullNameValidator = fullNameValidator;
  phoneValidator = phoneValidator;
  urlValidator = urlValidator;
  passwordValidator = passwordValidator;
  sameValue = sameValue;

  onSubmit(form: NgForm) {
    form.reset();
  }

  phoneCodes = ['+359', '+44', '+41'];
  professions = ['Designer', 'Architect', 'Secretary'];

  constructor() { }
}
