import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appUrlValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UrlValidatorDirective,
      multi: true
    }
  ]
})

export class UrlValidatorDirective implements Validator {
  @Input() name: string;  

  constructor() {

  }
  validate(control: AbstractControl): ValidationErrors {
    if (!control.value.match(/https?:\/\/.+\.(jpg|png)/)) {
      return { url: { [this.name]: control.value } };
    }
  }
}
