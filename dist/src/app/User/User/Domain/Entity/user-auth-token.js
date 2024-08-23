"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthToken = void 0;
const datetime_1 = require("../../../../../utils/Date/datetime");
class UserAuthToken {
    token;
    expirationDate;
    constructor(token) {
        this.token = token;
        this.expirationDate = new datetime_1.Datetime().addHours(3);
    }
    jsonSerialize() {
        return {
            token: this.token,
            expirationDate: this.expirationDate.toDatabase()
        };
    }
}
exports.UserAuthToken = UserAuthToken;
//# sourceMappingURL=user-auth-token.js.map