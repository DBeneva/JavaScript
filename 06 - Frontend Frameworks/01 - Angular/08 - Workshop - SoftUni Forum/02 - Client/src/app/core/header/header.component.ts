import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get username(): string {
    return this.userService.user.username;
  }

  errorMessage: string;

  constructor(
    private userService: UserService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ) {
    this.errorMessage = activatedRoute.snapshot.queryParams.error;
  }

  logout(): void {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
