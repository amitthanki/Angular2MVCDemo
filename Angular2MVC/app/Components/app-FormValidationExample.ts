import { Component,OnInit } from '@angular/core';
import { IFormModel } from '../Model/FormModel';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { CountryState } from '../Service/CountryService';
import { Country } from '../Model/Country';
import { State } from '../Model/State';
//import { IUserDetails } from '../Model/UserDetails';


@Component({
    templateUrl: 'app/Components/FormValidation.html',
    providers: [CountryState]
})
export class FormValidationComponent implements OnInit {
     
    countries: Country[];
    states: State[];
    myDatePickerOptions: IMyDpOptions = {
        // other options...
        editableDateField: false,
        markCurrentDay: true,
        dateFormat: 'dd/mm/yyyy',
        openSelectorOnInputClick: false,     
    };
    
    formValidation: FormGroup;
    user: IFormModel;
   // userdetails: IUserDetails;
    constructor(private fb: FormBuilder, private _CountryState: CountryState) {     
        this.countries = this._CountryState.getCountries();
    }
            ngOnInit(){
            this.formValidation = this.fb.group({
            FirstName: ['',Validators.required],
            LastName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            DOB: ['', Validators.required],
            Country: ['', Validators.required],
            State: ['', Validators.required],
            Gender: ['', Validators.required],
            IsActive: true,
          })             
           
    }

    onDateChanged(event: IMyDateModel) {
        console.log(event.date);
    }

    onselect(CountryID: number) {
        this.states = this._CountryState.getStatus().filter((item) => item.CountryID == CountryID)
    }
    onSubmit(formValidation: any) {
        debugger;
        console.log(formValidation._value);
    }

}