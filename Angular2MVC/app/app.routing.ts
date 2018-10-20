import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { FormValidationComponent } from './Components/app-FormValidationExample';
import { ComplexValidation } from './Components/ComplexValidation';
import { TeamManagement } from './Components/TeamManagement';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'FormValidation', component: FormValidationComponent },
    { path: 'ComplexValidation', component: ComplexValidation },
    { path: 'TeamManagement', component: TeamManagement }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);