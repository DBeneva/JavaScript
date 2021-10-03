import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[ngModel][appPhoneValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneValidatorDirective,
      multi: true
    }
  ]
})

export class PhoneValidatorDirective implements Validator {
  @Input() name: string;

  constructor() { }
  
  validate(control: AbstractControl): ValidationErrors {
    if (control.value && !control.value.match(/[0-9]{3} [0-9]{3} [0-9]{3}/)) {
      return { phone: { [this.name]: control.value } };
    }
  }
}
