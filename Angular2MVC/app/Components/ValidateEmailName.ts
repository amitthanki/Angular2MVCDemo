import { AbstractControl, ValidatorFn, FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

export function ValidateEmailName(regexp: RegExp): ValidatorFn {
    debugger;
    alert("hi");
    return (control: AbstractControl): { [key: string]: any } => {
        const value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'pattenInvalid': { regexp } } : null;
    };
}