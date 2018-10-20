"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ValidateEmailName(regexp) {
    debugger;
    alert("hi");
    return function (control) {
        var value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'pattenInvalid': { regexp: regexp } } : null;
    };
}
exports.ValidateEmailName = ValidateEmailName;
//# sourceMappingURL=ValidateEmailName.js.map