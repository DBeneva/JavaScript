import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomValidatorDirective,
      multi: true
    }
  ]
})
export class CustomValidatorDirective implements Validator {
  @Input('appCustomValidator') validatorFn: ValidatorFn | undefined;
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    console.log(this.validatorFn);
    if (!this.validatorFn) { return null; }
    // return emailValidator(control);
    return this.validatorFn(control);
  }
}
