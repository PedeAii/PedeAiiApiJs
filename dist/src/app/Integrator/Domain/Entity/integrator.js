"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integrator = void 0;
const UnprocessableEntity_1 = require("../../../../../Kernel/Http/UnprocessableEntity");
const empty_1 = require("../../../../utils/Functions/empty");
class Integrator {
    id;
    username;
    password;
    createdAt;
    updatedAt;
    constructor(id, username, password, createdAt, updatedAt) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.integratorValidate();
    }
    integratorValidate() {
        let errors = [];
        if ((0, empty_1.empty)(this.username)) {
            errors.push('Username invalid or not informed');
        }
        if ((0, empty_1.empty)(this.password)) {
            errors.push('Password invalid or not informed');
        }
        if (errors.length > 0) {
            throw new UnprocessableEntity_1.UnprocessableEntity(errors);
        }
        return true;
    }
}
exports.Integrator = Integrator;
//# sourceMappingURL=integrator.js.map