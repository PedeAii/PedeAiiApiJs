"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatus = void 0;
const UnprocessableEntity_1 = require("../../../../../../Kernel/Http/UnprocessableEntity");
class UserStatus {
    status;
    static ACTIVE = 'ACTIVE';
    static INACTIVE = 'INACTIVE';
    constructor(status) {
        this.status = status;
        this.getStatus();
    }
    getStatus() {
        switch (this.status) {
            case 'ACTIVE':
                return UserStatus.ACTIVE;
            case 'INACTIVE':
                return UserStatus.INACTIVE;
            default:
                throw new UnprocessableEntity_1.UnprocessableEntity([`Invalid UserStatus: ${this.status}`]);
        }
    }
}
exports.UserStatus = UserStatus;
//# sourceMappingURL=user-status.js.map