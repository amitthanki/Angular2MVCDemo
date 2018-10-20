import { AbstractControl, ValidatorFn, FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { ValidateEmailName } from '../Components/ValidateEmailName';
@Directive({
    selector: '[validateEmailDirective]',
    providers: [{ provide: NG_VALIDATORS, useExisting: validateEmailDirective, multi: true }]
})

export class validateEmailDirective implements Validator {
    @Input('validateEmail') validateEmail: string;    
    validate(c: AbstractControl): { [key: string]: any; } {
        debugger;
        return this.validateEmail ? ValidateEmailName(new RegExp(this.validateEmail, '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'))(c) : null;
    }
}
  
