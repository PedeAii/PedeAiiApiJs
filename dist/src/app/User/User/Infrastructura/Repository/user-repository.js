"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const Knex_1 = require("../../../../../../Kernel/Database/Knex");
const created_at_1 = require("../../../../../utils/Date/created-at");
const deleted_at_1 = require("../../../../../utils/Date/deleted-at");
const updated_at_1 = require("../../../../../utils/Date/updated-at");
const cpf_1 = require("../../../../../utils/Entity/cpf");
const email_1 = require("../../../../../utils/Entity/email");
const address_id_1 = require("../../../../Address/Domain/Entity/address-id");
const role_id_1 = require("../../../Profile/Role/Domain/Entity/role-id");
const user_1 = require("../../Domain/Entity/user");
const user_id_1 = require("../../Domain/Entity/user-id");
const user_status_1 = require("../../Domain/Entity/user-status");
class UserRepository extends Knex_1.Database {
    tableName = 'user';
    constructor() { super(); }
    async getByEmail(email) {
        const result = await this.getInstance()
            .select('*')
            .from(this.tableName)
            .where({ email })
            .first();
        if (!result) {
            return null;
        }
        return this.getUser(result);
    }
    getUser(result) {
        return new user_1.User(new user_id_1.UserId(result.id), new role_id_1.RoleId(result.role_id ?? null), new address_id_1.AddressId(result.address_id ?? null), result.username ?? null, new email_1.Email(result.email), result.password ?? null, result.phone ?? null, new cpf_1.Cpf(result.document), new user_status_1.UserStatus(result.status), new created_at_1.CreatedAt(result.created_at), new updated_at_1.UpdatedAt(result.updated_at), new deleted_at_1.DeletedAt(result.deleted_at));
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.js.map