import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { CustomValidatorDirective } from './custom-validator.directive';
import { GetPropPipe } from './get-prop.pipe';


@NgModule({
  declarations: [
    WelcomeMessageComponent,
    CustomValidatorDirective,
    GetPropPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WelcomeMessageComponent,
    CustomValidatorDirective,
    GetPropPipe
  ]
})
export class SharedModule { }
