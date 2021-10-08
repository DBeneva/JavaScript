import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator, phoneValidator } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  emailValidator = emailValidator;
  phoneValidator = phoneValidator;
  phoneCodes = ['+359', '+44', '+41', '+1'];
  user = this.userService.user;
  userTel = `${this.user.tel.slice(-9, -6)} ${this.user.tel.slice(-6, -3)} ${this.user.tel.slice(-3)}`;
  userCode = this.user.tel.slice(-this.user.tel.length, -9);
  constructor(private userService: UserService, private router: Router) { }

  updateProfile(form: NgForm) {
    if (form.invalid) return;
    const { username, email } = form.value;
    const tel = `${form.value.code}${form.value.tel.split(' ').join('')}`;

    this.userService.updateProfile({ username, email, tel}).subscribe({
      next: () => { this.router.navigate(['/profile']); },
      error: (err) => { console.error(err); }
    });
  }
}
