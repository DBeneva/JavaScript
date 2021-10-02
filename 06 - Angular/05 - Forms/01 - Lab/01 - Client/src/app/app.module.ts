import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { SameValueDirective } from './register/validators/same-value.directive';
import { FullNameValidatorDirective } from './register/validators/full-name-validator.directive';
import { PhoneValidatorDirective } from './register/validators/phone-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SameValueDirective,
    FullNameValidatorDirective,
    PhoneValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
