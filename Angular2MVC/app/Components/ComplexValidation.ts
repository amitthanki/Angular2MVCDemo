import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';
import { IUserMaster } from '../Model/UserMaster';


@Component({
    templateUrl: 'app/Components/UIComplexValidation.html',
          
})
export class ComplexValidation implements OnInit {
    //constructor(private fb: FormBuilder) {
       
    //}
    //emailReg: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    isPhoneNumber = false;
    isEmail = false;
    form: FormGroup;
    errors: string[] = [];
    userMaster: IUserMaster;
    ngOnInit() {
     
        //this.form = this.fb.group({
        //    name: [null, Validators.required],
        //    email: [null, Validators.required,]            
        //}); 

        this.userMaster = {
            name : null,
            email: null,
            ContactPreference: null,
            PhoneNumber: null

        };
        
        }

    isFieldValid(field: string) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    }

    displayFieldCSS(field: string) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    }

    onSubmit() {
        console.log(this.userMaster);       
        //if (this.form.valid) {
        //    console.log('Form Valid');
        //}
        //else {
        //   // this.validateAllFormField(this.form);
        //  //  this.validateAllFormField();
           
        //}
    }

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

    validateAllFormField() {
        const form = this.form;
        this.errors = [];
        debugger;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (!control.valid) {              
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                    this.errors.push(this.formErrors[field]);
                    control.markAsTouched({ onlySelf:true });
                }
            }
        }
    }

    formErrors = {
        'name': '',
        'email': ''
    };

    validationMessages = {
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
