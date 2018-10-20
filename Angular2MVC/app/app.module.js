"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var user_component_1 = require("./components/user.component");
var home_component_1 = require("./components/home.component");
var user_service_1 = require("./Service/user.service");
var Remove_spacesComponent_1 = require("./Components/Remove-spacesComponent");
var SearchPipe_1 = require("./Components/SearchPipe");
var StarComponent_1 = require("./Components/StarComponent");
var app_FormValidationExample_1 = require("./Components/app-FormValidationExample");
var ComplexValidation_1 = require("./Components/ComplexValidation");
var mydatepicker_1 = require("mydatepicker");
var forms_2 = require("@angular/forms");
var TeamManagement_1 = require("./Components/TeamManagement");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing, ng2_bs3_modal_1.Ng2Bs3ModalModule, mydatepicker_1.MyDatePickerModule, forms_2.FormsModule],
        declarations: [app_component_1.AppComponent, user_component_1.UserComponent, home_component_1.HomeComponent, Remove_spacesComponent_1.RemoveSpaces, SearchPipe_1.SearchPipe, StarComponent_1.StarComponent, app_FormValidationExample_1.FormValidationComponent, ComplexValidation_1.ComplexValidation, TeamManagement_1.TeamManagement],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, user_service_1.UserService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map