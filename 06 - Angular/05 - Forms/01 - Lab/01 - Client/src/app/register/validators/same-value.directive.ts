import { Directive, Input, OnDestroy } from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[ngModel][appSameValue]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SameValueDirective,
      multi: true
    }
  ]
})
export class SameValueDirective implements OnDestroy, Validator {

  @Input() appSameValue = '';
  @Input() name: string;
  otherControl: AbstractControl;
  subscription: Subscription;

  constructor(private form: NgForm) { }

  validate(control: AbstractControl): ValidationErrors {
    const otherControl = this.form.controls[this.appSameValue];
    if (this.subscription) { this.subscription.unsubscribe(); }
    this.subscription = otherControl.valueChanges.subscribe(() => {
      control.updateValueAndValidity({ onlySelf: true });
    });

    return control.value != otherControl.value ? {
      sameValue: {
        [this.appSameValue]: otherControl.value,
        [this.name]: control.value
      }
    } : null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
