import { AbstractControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { filter, switchMap, startWith } from "rxjs/operators";

export function fullNameValidator(control: AbstractControl) {
    if (!control.value) return null;

    if (!/^[A-Za-z]+ [A-Za-z]+$/.test(control.value)) {
        return { twoNames: true };
    } else if (control.value && !/[A-Z][a-z]* [A-Z][a-z]*/.test(control.value)) {
        return { capitalLetters: true };
    } else {
        return null;
    }
}

export function phoneValidator(control: AbstractControl) {
    if (!control.value) return null;

    return !/^[0-9]{3} [0-9]{3} [0-9]{3}$/.test(control.value) ?
        { phone: true } : null;
}

export function urlValidator(control: AbstractControl) {
    if (!control.value) return null;

    return !/^https?:\/\/.+\.(jpg|png)$/.test(control.value) ?
        { url: true } : null;
}

export function passwordValidator(control: AbstractControl) {
    if (!control.value) return null;

    return !/^[A-Za-z0-9]+$/.test(control.value) ?
        { notAllowedCharacters: true } : null;
}

export function sameValueAsFactory(getTargetControl: () => AbstractControl | null) {
    let subscription: Subscription | null = null;

    return function (control: AbstractControl) {
        if (subscription) {
            subscription.unsubscribe();
            subscription = null;
        }

        const targetControl = getTargetControl();

        if (!targetControl) return null;

        subscription = control.statusChanges.pipe(
            filter(() => false),
            startWith(null),
            switchMap(() => targetControl.valueChanges)
        ).subscribe({
            next: () => { control.updateValueAndValidity(); },
            complete: () => { subscription = null; }
        });

        return control.value == targetControl.value ? null :
            { noMatch: true };
    }
}

export function sameValue(targetControl: AbstractControl | null) {
    let subscription: Subscription | null = null;

    return function (control: AbstractControl) {
        if (subscription) {
            subscription.unsubscribe();
            subscription = null;
        }

        if (!targetControl) return null;

        subscription = control.statusChanges.pipe(
            filter(() => false),
            startWith(null),
            switchMap(() => targetControl.valueChanges)
        ).subscribe({
            next: () => { control.updateValueAndValidity(); },
            complete: () => { subscription = null; }
        });

        return control.value == targetControl.value ? null :
            { noMatch: true };
    }
}