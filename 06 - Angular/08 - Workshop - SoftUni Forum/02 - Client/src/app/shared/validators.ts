import { AbstractControl, FormArray, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) { return null; }

    return /^.{6,}@gmail\.(bg|com)$/.test(control.value) ? null : {
        invalidEmail: true
    };
}

export function phoneValidator(control: AbstractControl): ValidationErrors {
    if (!control.value) { return; }

    return /^[0-9]{3} [0-9]{3} [0-9]{3}$/.test(control.value) ? null : {
        invalidPhone: true
    };
}

export function passwordValidator(controls: FormArray): ValidationErrors {
    if (!controls[0]) { return; }
    debugger;
    return /^[A-Za-z0-9]{5,}$/.test(controls[0]) ? null : {
        invalidPassword: true
    };
}