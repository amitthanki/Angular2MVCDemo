"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
var global_1 = require("../Shared/global");
function existingTeamName(userservice) {
    return function (control) {
        return userservice.getDuplicateName(global_1.Global.GetTeamName, control.value).map(function (users) {
            console.log(users);
            return (users.length > 0) ? { "abc": true } : null;
        });
    };
}
exports.existingTeamName = existingTeamName;
//# sourceMappingURL=GetTeamName.js.map