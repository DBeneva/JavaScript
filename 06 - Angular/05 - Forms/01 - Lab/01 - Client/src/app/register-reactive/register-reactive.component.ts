import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css']
})
export class RegisterReactiveComponent implements OnInit {

  form: FormGroup;

  phoneCodes = ['+359', '+44', '+41'];
  professions = ['Designer', 'Architect', 'Secretary'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[A-Z][a-z]* [A-Z][a-z]*')]],
      email: ['', [Validators.required, Validators.email]],
      code: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{3} [0-9]{3} [0-9]{3}')]],
      profession: ['', [Validators.required]],
      image: ['', [Validators.required, Validators.pattern('https?://.*\.(png|jpg)')]],
      password: ['', [Validators.minLength(6)]],
      repeatPassword: ['', Validators.required, this.sameValueValidator]
    });
  }

  sameValueValidator(form = this.form) {
    const password = form.controls['password'];
    const repeatPassword = form.get('repeatPassword').value;

    if (password != repeatPassword) {
      form.get('repeatPassword').setErrors({ noMatch: true });
    }
  }
}
