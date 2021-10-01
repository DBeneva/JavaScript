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

  tell = '+359';

  phoneCodes: Object[] = [
    { code: '+359', default: true },
    { code: '+44', default: '' },
    { code: '+41', default: '' }
  ];


  constructor() {  }
}
