import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { CustomValidatorDirective } from './custom-validator.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TimeDiffPipe } from './pipes/time-diff.pipe';
import { DatePipe } from './pipes/date.pipe';


@NgModule({
  declarations: [
    WelcomeMessageComponent,
    CustomValidatorDirective,
    ShortenPipe,
    TimeDiffPipe,
    DatePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WelcomeMessageComponent,
    CustomValidatorDirective,
    ShortenPipe,
    TimeDiffPipe,
    DatePipe
  ]
})
export class SharedModule { }
