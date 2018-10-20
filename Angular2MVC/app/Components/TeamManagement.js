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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var Team_1 = require("../Model/Team");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var user_service_1 = require("../Service/user.service");
var global_1 = require("../Shared/global");
var CountryService_1 = require("../Service/CountryService");
//import { existingTeamName } from '../components/GetTeamName';
var TeamManagement = (function () {
    function TeamManagement(_fb, _userService, _CountryState) {
        this._fb = _fb;
        this._userService = _userService;
        this._CountryState = _CountryState;
        this.errors = [];
        this.Mainerrors = [];
        this.IshideShow = false;
        /// Validation Message for Employees
        this.EmpFormError = {
            'empId': '',
            'empName': ''
            //'country': '',
            //'otherCountry':''
        };
        this.validationMessageforEmp = {
            'empId': {
                'required': 'Id is required.',
            },
            'empName': {
                'required': 'Name is required.',
                'minlength': 'Name should be 4 Characters.'
            },
        };
        // Validation Message for Team 
        this.TeamFormError = {
            'teamName': '',
            'teamManager': '',
            'EmpDetails': '',
        };
        this.ValidationMessageForTeam = {
            'teamName': {
                'required': 'Team Name is required.',
            },
            'teamManager': {
                'required': 'Team Manager Name is required.',
            },
            'EmpDetails': {
                'required': 'At least one Employee Details is required.',
            },
        };
        this.countries = this._CountryState.getCountries();
    }
    TeamManagement.prototype.ngOnInit = function () {
        this.CreateTeamForm();
        this.team = new Team_1.Team();
        this.team.employees = [];
    };
    TeamManagement.prototype.CreateTeamForm = function () {
        this.teamForm = this._fb.group({
            teamName: ['', forms_1.Validators.required],
            teamManager: ['', forms_1.Validators.required],
            EmpDetails: this._fb.group({
                empId: ['', forms_1.Validators.required],
                empName: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            })
        });
    };
    //get empFormArray(): FormArray {
    //    return this.teamForm.get('employees') as FormArray;
    //}     
    // Add Emp Button detail
    TeamManagement.prototype.addEmployee = function () {
        this.errors = [];
        this.message = "";
        this.readonly = false;
        this.modelTitle = "Add Employee";
        this.dbops = 1;
        var emp = this.teamForm.get('EmpDetails').value;
        this.teamForm.patchValue({ EmpDetails: { empId: '', empName: '' } });
        this.modal.open();
    };
    // Add or Edit and Delete Emp details form table.
    TeamManagement.prototype.addEmpButton = function () {
        this.errors = [];
        var controls = this.teamForm.get('EmpDetails');
        for (var field in this.EmpFormError) {
            var a = this.teamForm.get('EmpDetails').get(field);
            this.EmpFormError[field] = '';
            if (!controls.valid) {
                var message = this.validationMessageforEmp[field];
                for (var key in a.errors) {
                    this.EmpFormError[field] += message[key];
                    this.errors.push(this.EmpFormError[field]);
                }
            }
        }
        if (this.errors.length == 0) {
            var emp = this.teamForm.get('EmpDetails').value;
            if (this.dbops == 1) {
                var filteredFamily = this.duplicateEmpCheck(emp.empId, this.team.employees);
                if (filteredFamily) {
                    this.team.employees.push(emp);
                    this.modal.close();
                }
                else {
                    this.message = "cannot insert duplicate value";
                }
            }
            else if (this.dbops == 2) {
                this.UpdateEmpDetails(emp.empId, emp.empName);
                this.modal.close();
            }
        }
    };
    // Duplicate emp Details check in table.
    TeamManagement.prototype.duplicateEmpCheck = function (namekey, array) {
        var isExist = true;
        for (var i = 0; i < array.length; i++) {
            if (array[i].empId == namekey)
                isExist = false;
            return isExist;
        }
        return isExist;
    };
    // Edit Employee Details
    TeamManagement.prototype.editEmpDetails = function (id) {
        this.errors = [];
        this.message = "";
        this.modelTitle = "Edit Employee";
        this.readonly = true;
        this.dbops = 2;
        this.modal.open();
        var EditEmp = this.team.employees.filter(function (x) { return x.empId == id; })[0];
        this.teamForm.patchValue({ EmpDetails: { empId: EditEmp.empId, empName: EditEmp.empName } });
        //  this.teamForm.get('EmpDetails').get('empId').disable();  --- Disabled Control
    };
    // Update Array value based on Emp ID.
    TeamManagement.prototype.UpdateEmpDetails = function (namekey, namevalue) {
        var UpdateDetails = this.team.employees.find(function (x) { return x.empId == namekey; });
        var index = this.team.employees.indexOf(UpdateDetails);
        this.team.employees[index].empName = namevalue;
    };
    // Final Submit 
    TeamManagement.prototype.FinalSubmit = function () {
        this.Mainerrors = [];
        var controls = this.teamForm;
        for (var field in controls.controls) {
            var a = this.teamForm.get(field);
            this.TeamFormError[field] = '';
            if (!a.valid) {
                var message = this.ValidationMessageForTeam[field];
                for (var key in a.errors) {
                    this.TeamFormError[field] += message[key];
                    this.Mainerrors.push(this.TeamFormError[field]);
                }
            }
        }
        if (this.team.employees.length == 0) {
            var message = this.ValidationMessageForTeam['EmpDetails'];
            this.Mainerrors.push(message['required']);
        }
        if (this.errors.length == 0) {
            var i = JSON.stringify(this.team);
            console.log(i);
        }
    };
    TeamManagement.prototype.onReset = function () {
        this.team.employees = [];
        this.team.TeamManagerName = "";
        this.team.TeamName = "";
        this.Mainerrors = [];
    };
    // Search On Change
    TeamManagement.prototype.onChange = function () {
        this.SearchTeamAndEmp(1);
    };
    //Country Change Event
    TeamManagement.prototype.CountryDropdown = function (CountryID) {
        if (CountryID == 3) {
            this.IshideShow = true;
            this.teamForm.get('EmpDetails').get("otherCountry").setValidators(forms_1.Validators.required);
        }
        else {
            this.IshideShow = false;
            this.teamForm.get('EmpDetails').get("otherCountry").clearValidators();
        }
        this.teamForm.get('EmpDetails').get("otherCountry").updateValueAndValidity();
    };
    /// search team and Employee Details
    TeamManagement.prototype.SearchTeamAndEmp = function (id) {
        var _this = this;
        this._userService.get(global_1.Global.TeamDetails).subscribe(function (team) {
            _this.team = team.data;
            sessionStorage.setItem("team", team.data);
        });
    };
    return TeamManagement;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], TeamManagement.prototype, "modal", void 0);
TeamManagement = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/UITeamManagement.html',
        providers: [user_service_1.UserService, CountryService_1.CountryState]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService, CountryService_1.CountryState])
], TeamManagement);
exports.TeamManagement = TeamManagement;
//# sourceMappingURL=TeamManagement.js.map