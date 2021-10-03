import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[ngModel][appFullNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FullNameValidatorDirective,
      multi: true
    }
  ]
})
export class FullNameValidatorDirective implements Validator {
  @Input() name: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (control.value && !control.value.match(/[A-Za-z]+ [A-Za-z]+/)) {
      return { twoNames: { [this.name]: control.value } };
    } else if (control.value && !control.value.match(/[A-Z][a-z]* [A-Z][a-z]*/)) {
      return { capitalLetters: { [this.name]: control.value } };
    }
  }
}
