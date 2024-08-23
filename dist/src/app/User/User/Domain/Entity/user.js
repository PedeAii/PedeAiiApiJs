"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const UnprocessableEntity_1 = require("../../../../../../Kernel/Http/UnprocessableEntity");
class User {
    id;
    roleId;
    addressId;
    username;
    email;
    password;
    phone;
    document;
    userStatus;
    createdAt;
    updatedAt;
    deletedAt;
    constructor(id, roleId, addressId, username, email, password, phone, document, userStatus, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.roleId = roleId;
        this.addressId = addressId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.document = document;
        this.userStatus = userStatus;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.userVelidate();
    }
    userVelidate() {
        let errors = [];
        if (!this.username) {
            errors.push('Username invalid or not informed');
        }
        if (!this.password) {
            errors.push('Password invalid or not informed');
        }
        if (!this.email.isValidEmail()) {
            errors.push('Email invalid or not informed');
        }
        if (!this.document.cpfIsValid()) {
            errors.push('Cpf invalid or not informed');
        }
        if (errors.length > 0) {
            throw new UnprocessableEntity_1.UnprocessableEntity(errors);
        }
        return true;
    }
    jsonSerialize() {
        return {
            'id': this.id.getIdEncoded,
            'roleId': this.roleId.getIdEncoded,
            'addressId': this.addressId.getIdEncoded,
            'username': this.username,
            'email': this.email.email,
            'phone': this.phone,
            'userStatus': this.userStatus.getStatus()
        };
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map