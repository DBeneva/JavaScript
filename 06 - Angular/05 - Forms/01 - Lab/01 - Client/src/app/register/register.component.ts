import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  onSubmit(form: NgForm) {
    form.reset();
  }

  phoneCodes = ['+359', '+44', '+41'];
  professions = ['Designer', 'Architect', 'Secretary'];

  constructor() {  }
}
