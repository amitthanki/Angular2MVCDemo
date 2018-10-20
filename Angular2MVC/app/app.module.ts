import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { UserService } from './Service/user.service'
import { RemoveSpaces } from './Components/Remove-spacesComponent';
import { SearchPipe} from './Components/SearchPipe';
import { StarComponent } from './Components/StarComponent';
import { FormValidationComponent } from './Components/app-FormValidationExample';
import { ComplexValidation } from './Components/ComplexValidation';
import { MyDatePickerModule } from 'mydatepicker';
import { validateEmailDirective } from './Components/ValidateEmail';
import { FormsModule } from '@angular/forms';
import { TeamManagement } from './Components/TeamManagement';
@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule, MyDatePickerModule, FormsModule],
    declarations: [AppComponent, UserComponent, HomeComponent, RemoveSpaces, SearchPipe, StarComponent, FormValidationComponent, ComplexValidation, TeamManagement],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent]

})
export class AppModule { }
