import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'register-reactive', component: RegisterReactiveComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);