"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ComplexValidation = (function () {
    function ComplexValidation() {
        //constructor(private fb: FormBuilder) {
        //}
        //emailReg: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.isPhoneNumber = false;
        this.isEmail = false;
        this.errors = [];
        this.formErrors = {
            'name': '',
            'email': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 24 characters long.'
            },
            'email': {
                'required': 'email is required.',
                'validateEmailDirective': 'Email ID not Validate.'
            }
        };
    }
    ComplexValidation.prototype.ngOnInit = function () {
        //this.form = this.fb.group({
        //    name: [null, Validators.required],
        //    email: [null, Validators.required,]            
        //}); 
        this.userMaster = {
            name: null,
            email: null,
            ContactPreference: null,
            PhoneNumber: null
        };
    };
    ComplexValidation.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    ComplexValidation.prototype.displayFieldCSS = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    ComplexValidation.prototype.onSubmit = function () {
        console.log(this.userMaster);
        //if (this.form.valid) {
        //    console.log('Form Valid');
        //}
        //else {
        //   // this.validateAllFormField(this.form);
        //  //  this.validateAllFormField();
        //}
    };
    //validateAllFormField(formgroup: FormGroup) {   
    //    Object.keys(formgroup.controls).forEach(field => {
    //        console.log(field);
    //        debugger;
    //        const controls = formgroup.get(field);
    //        // let controls = formgroup.controls[field];
    //        //if (field == name) {
    //        //    debugger;
    //        //    this.errors.push("name Required");
    //        //} 
    //        for (const field in this.formErrors) {
    //            // clear previous error message (if any)
    //            this.formErrors[field] = '';
    //            debugger;
    //            const control = formgroup.get(field);
    //            if (control && control.dirty && !control.valid) {
    //                const messages = this.validationMessages[field];
    //                for (const key in control.errors) {
    //                    this.formErrors[field] += messages[key] + ' ';
    //                }
    //            }
    //        }
    //        //let errors = controls.errors;
    //        //if (errors.required) {
    //        //    debugger;
    //        //    this.errors.push(`${errors.message }`);
    //        //}
    //    })
    //}
    ComplexValidation.prototype.validateAllFormField = function () {
        var form = this.form;
        this.errors = [];
        debugger;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (!control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                    this.errors.push(this.formErrors[field]);
                    control.markAsTouched({ onlySelf: true });
                }
            }
        }
    };
    return ComplexValidation;
}());
ComplexValidation = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/UIComplexValidation.html',
    })
], ComplexValidation);
exports.ComplexValidation = ComplexValidation;
//# sourceMappingURL=ComplexValidation.js.map