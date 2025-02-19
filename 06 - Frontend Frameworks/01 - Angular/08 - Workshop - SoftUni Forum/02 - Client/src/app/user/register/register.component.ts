import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { emailValidator, passwordValidator, phoneValidator, sameValueAsFactory } from 'src/app/shared/validators';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  // killSubscription = new Subject();
  form: FormGroup;
  emailValidator = emailValidator;
  phoneValidator = phoneValidator;
  passwordValidator = passwordValidator;
  phoneCodes = ['+359', '+44', '+41', '+1'];

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, emailValidator]],
      code: ['', []],
      tel: ['', [phoneValidator]],
      password: ['', [Validators.required, passwordValidator]],
      rePassword: ['', [Validators.required, sameValueAsFactory(
        () => this.form ? this.form.get('password') : null, this.killSubscription
      )]]
    });
  }

  register(): void {
    if (this.form.invalid) { return; }
    console.log(`${this.form.value.code}`);
    

    const { username, email, password } = this.form.value;
    const tel = `${this.form.value.code || '+359'}${this.form.value.tel.split(' ').join('')}`;
    this.userService.register({ username, email, tel, password }).subscribe({
      next: () => { this.router.navigate(['/']) },
      error: (err) => { console.error(err) }
    });
  }

  ngOnDestroy() {
    // this.killSubscription.next();
    // this.killSubscription.complete();
  }
}