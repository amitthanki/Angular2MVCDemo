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
var ValidateEmailName_1 = require("../Components/ValidateEmailName");
var validateEmailDirective = validateEmailDirective_1 = (function () {
    function validateEmailDirective() {
    }
    validateEmailDirective.prototype.validate = function (c) {
        debugger;
        return this.validateEmail ? ValidateEmailName_1.ValidateEmailName(new RegExp(this.validateEmail, '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'))(c) : null;
    };
    return validateEmailDirective;
}());
__decorate([
    core_1.Input('validateEmail'),
    __metadata("design:type", String)
], validateEmailDirective.prototype, "validateEmail", void 0);
validateEmailDirective = validateEmailDirective_1 = __decorate([
    core_1.Directive({
        selector: '[validateEmailDirective]',
        providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: validateEmailDirective_1, multi: true }]
    })
], validateEmailDirective);
exports.validateEmailDirective = validateEmailDirective;
var validateEmailDirective_1;
//# sourceMappingURL=ValidateEmail.js.map