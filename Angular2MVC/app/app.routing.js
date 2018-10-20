"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var home_component_1 = require("./components/home.component");
var app_FormValidationExample_1 = require("./Components/app-FormValidationExample");
var ComplexValidation_1 = require("./Components/ComplexValidation");
var TeamManagement_1 = require("./Components/TeamManagement");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'FormValidation', component: app_FormValidationExample_1.FormValidationComponent },
    { path: 'ComplexValidation', component: ComplexValidation_1.ComplexValidation },
    { path: 'TeamManagement', component: TeamManagement_1.TeamManagement }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map