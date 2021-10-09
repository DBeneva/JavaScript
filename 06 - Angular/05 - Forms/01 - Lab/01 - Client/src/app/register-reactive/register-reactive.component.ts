import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fullNameValidator, passwordValidator, phoneValidator, sameValueAsFactory, urlValidator } from '../shared/validators';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css']
})
export class RegisterReactiveComponent {

  form: FormGroup;

  phoneCodes = ['+359', '+44', '+41'];
  professions = ['Designer', 'Architect', 'Secretary'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, fullNameValidator]],
      email: ['', [Validators.required, Validators.email]],
      code: [''],
      phone: ['', [Validators.required, phoneValidator]],
      profession: [''],
      image: ['', [Validators.required, urlValidator]],
      passData: this.fb.group({
        password: ['', [Validators.minLength(3), Validators.maxLength(16), passwordValidator]],
        repeatPassword: ['', [Validators.required, sameValueAsFactory(() => this.form ? this.form.get('passData.password') : null)]]
      })
    });
  }

  reset() {
    this.form.reset();
  }
}
