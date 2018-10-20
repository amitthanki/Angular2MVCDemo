import { AsyncValidatorFn, AbstractControl  } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserService } from '../Service/user.service';
import { Global } from '../Shared/global';

export function existingTeamName(userservice: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any | null> => {     
        return userservice.getDuplicateName(Global.GetTeamName, control.value).map(
            users => {
                console.log(users);  
                return (users.length > 0) ? { "abc": true } : null;
                
            });
    };
}