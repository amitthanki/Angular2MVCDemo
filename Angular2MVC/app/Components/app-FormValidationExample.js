"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CountryService_1 = require("../Service/CountryService");
//import { IUserDetails } from '../Model/UserDetails';
var FormValidationComponent = (function () {
    // userdetails: IUserDetails;
    function FormValidationComponent(fb, _CountryState) {
        this.fb = fb;
        this._CountryState = _CountryState;
        this.myDatePickerOptions = {
            // other options...
            editableDateField: false,
            markCurrentDay: true,
            dateFormat: 'dd/mm/yyyy',
            openSelectorOnInputClick: false,
        };
        this.countries = this._CountryState.getCountries();
    }
    FormValidationComponent.prototype.ngOnInit = function () {
        this.formValidation = this.fb.group({
            FirstName: ['', forms_1.Validators.required],
            LastName: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            DOB: ['', forms_1.Validators.required],
            Country: ['', forms_1.Validators.required],
            State: ['', forms_1.Validators.required],
            Gender: ['', forms_1.Validators.required],
            IsActive: true,
        });
    };
    FormValidationComponent.prototype.onDateChanged = function (event) {
        console.log(event.date);
    };
    FormValidationComponent.prototype.onselect = function (CountryID) {
        this.states = this._CountryState.getStatus().filter(function (item) { return item.CountryID == CountryID; });
    };
    FormValidationComponent.prototype.onSubmit = function (formValidation) {
        debugger;
        console.log(formValidation._value);
    };
    return FormValidationComponent;
}());
FormValidationComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/FormValidation.html',
        providers: [CountryService_1.CountryState]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, CountryService_1.CountryState])
], FormValidationComponent);
exports.FormValidationComponent = FormValidationComponent;
//# sourceMappingURL=app-FormValidationExample.js.map