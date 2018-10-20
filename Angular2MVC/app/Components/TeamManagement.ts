import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Team } from '../Model/Team';
import { EmpDetails } from '../Model/EmpDetails';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { DBOperation } from '../Shared/enum';
import { UserService } from '../Service/user.service';
import { Global } from '../Shared/global';
import { Country } from '../Model/Country';
import { CountryState } from '../Service/CountryService';
//import { existingTeamName } from '../components/GetTeamName';

@Component({
    templateUrl: 'app/Components/UITeamManagement.html',
    providers: [UserService, CountryState]
})

export class TeamManagement implements OnInit {
    public teamForm: FormGroup;
    public team: Team;
    countries: Country[];
    message: string;
    modelTitle: string;
    public emp: EmpDetails;
    dbops: DBOperation;
    readonly: boolean;
    errors: string[] = [];
    Mainerrors: string[] = [];
    IshideShow: boolean = false;
    @ViewChild('modal') modal: ModalComponent;

    constructor(private _fb: FormBuilder, private _userService: UserService, private _CountryState: CountryState) {
        this.countries = this._CountryState.getCountries();
    }
    ngOnInit(): void {
        this.CreateTeamForm();
        this.team = new Team();
        this.team.employees = [];
       
        }

        CreateTeamForm() {
            this.teamForm = this._fb.group({
                teamName: ['', Validators.required],
                teamManager: ['', Validators.required],
                EmpDetails: this._fb.group({
                    empId: ['', Validators.required],
                    empName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
                    //country: ['', Validators.required],
                    //otherCountry: ['']
                })
            }); 
        } 
        //get empFormArray(): FormArray {
        //    return this.teamForm.get('employees') as FormArray;
        //}     
       // Add Emp Button detail
        addEmployee() {    
            this.errors = [];
            this.message = "";
            this.readonly = false;
            this.modelTitle = "Add Employee"
            this.dbops = 1;
            let emp = this.teamForm.get('EmpDetails').value;
            this.teamForm.patchValue({ EmpDetails: { empId: '', empName:'' } });
            this.modal.open();
        }
        // Add or Edit and Delete Emp details form table.
        addEmpButton() {           
            this.errors = [];          
            const controls = this.teamForm.get('EmpDetails');
            for (const field in this.EmpFormError) {
                const a = this.teamForm.get('EmpDetails').get(field);
                this.EmpFormError[field] = '';
                if (!controls.valid) {
                    const message = this.validationMessageforEmp[field];
                    for (const key in a.errors) {
                        this.EmpFormError[field] += message[key];
                        this.errors.push(this.EmpFormError[field]);
                    }
                }
            }         
            if (this.errors.length == 0) {
                let emp = this.teamForm.get('EmpDetails').value;
                if (this.dbops == 1) { //Add
                    var filteredFamily = this.duplicateEmpCheck(emp.empId, this.team.employees);
                    if (filteredFamily) {
                        this.team.employees.push(emp);
                        this.modal.close();
                    }
                    else {
                        this.message = "cannot insert duplicate value";
                    }
                }
                else if (this.dbops == 2) {// Edit             
                    this.UpdateEmpDetails(emp.empId, emp.empName);
                    this.modal.close();
                }
            }
        }
      // Duplicate emp Details check in table.
        duplicateEmpCheck(namekey: string, array: any[]) {
            var isExist = true;
            for (var i = 0; i < array.length; i++) {
                if (array[i].empId == namekey)
                    isExist = false;
                return isExist;
            }
            return isExist;
        } 
       // Edit Employee Details
        editEmpDetails(id: string) {
            this.errors = [];
            this.message = "";
            this.modelTitle = "Edit Employee";
            this.readonly = true;
            this.dbops = 2;
            this.modal.open();
            let EditEmp = this.team.employees.filter(x => x.empId == id)[0];
            this.teamForm.patchValue({ EmpDetails: { empId: EditEmp.empId, empName: EditEmp.empName } });         
          //  this.teamForm.get('EmpDetails').get('empId').disable();  --- Disabled Control

        }
        // Update Array value based on Emp ID.
        UpdateEmpDetails(namekey: string, namevalue: string) {           
            let UpdateDetails = this.team.employees.find(x => x.empId == namekey);
            let index = this.team.employees.indexOf(UpdateDetails);
            this.team.employees[index].empName = namevalue;
        }
       // Final Submit 
        FinalSubmit() {           
            this.Mainerrors = [];          
            const controls = this.teamForm;
            for (const field in controls.controls) {
                const a = this.teamForm.get(field);
                this.TeamFormError[field] = '';
                if (!a.valid) {
                    const message = this.ValidationMessageForTeam[field];
                    for (const key in a.errors)  {
                        this.TeamFormError[field] += message[key];
                        this.Mainerrors.push(this.TeamFormError[field]);
                    }                   
                }
            }
            if (this.team.employees.length == 0) {
                const message = this.ValidationMessageForTeam['EmpDetails'];               
                this.Mainerrors.push(message['required']);
            }
            if (this.errors.length == 0) {
                let i = JSON.stringify(this.team);
                console.log(i);
            }
        }
        onReset() {
            this.team.employees = [];
            this.team.TeamManagerName = "";
            this.team.TeamName = "";
            this.Mainerrors = [];  
        }

       // Search On Change
        onChange() {
            this.SearchTeamAndEmp(1);
        }

        //Country Change Event
        CountryDropdown(CountryID: number) {           
            if (CountryID == 3) {
                this.IshideShow = true;
                this.teamForm.get('EmpDetails').get("otherCountry").setValidators(Validators.required);               
            }
            else {
                this.IshideShow = false;
                this.teamForm.get('EmpDetails').get("otherCountry").clearValidators();               
            }
            this.teamForm.get('EmpDetails').get("otherCountry").updateValueAndValidity();
        }
      

    /// search team and Employee Details

        SearchTeamAndEmp(id: number) {         
            this._userService.get(Global.TeamDetails).subscribe(team => {
                this.team = team.data;              
                sessionStorage.setItem("team", team.data);
            });
        }
      /// Validation Message for Employees
        EmpFormError = {           
            'empId': '',
            'empName': ''
            //'country': '',
            //'otherCountry':''
        };
        validationMessageforEmp = {        
            'empId': {
                'required': 'Id is required.',
              },
            'empName': {
                'required': 'Name is required.',
                'minlength':'Name should be 4 Characters.'               
            },
            //'country': {
            //    'required': 'Country is required.',
            //},
            //'otherCountry': {
            //    'required': 'Other Country Name is required.',
            //},
        }
       // Validation Message for Team 
        TeamFormError = {
            'teamName': '',
            'teamManager': '',
            'EmpDetails': '',
        };
        ValidationMessageForTeam = {
            'teamName': {
                'required': 'Team Name is required.',
            },
            'teamManager': {
                'required': 'Team Manager Name is required.',
            },
            'EmpDetails': {
                'required': 'At least one Employee Details is required.',
            },
        }
}