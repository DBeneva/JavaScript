import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SameValueDirective } from './register/validators/same-value.directive';
import { FullNameValidatorDirective } from './register/validators/full-name-validator.directive';
import { PhoneValidatorDirective } from './register/validators/phone-validator.directive';
import { UrlValidatorDirective } from './register/validators/url-validator.directive';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SameValueDirective,
    FullNameValidatorDirective,
    PhoneValidatorDirective,
    UrlValidatorDirective,
    RegisterReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
