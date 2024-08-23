"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionRepository = void 0;
const Knex_1 = require("../../../../../../../Kernel/Database/Knex");
const permission_1 = require("../../Domain/Entity/permission");
const permission_collection_1 = require("../../Domain/Entity/permission-collection");
const permission_id_1 = require("../../Domain/Entity/permission-id");
class permissionRepository extends Knex_1.Database {
    tableName = 'permission';
    constructor() { super(); }
    async getPermissionsByRoleId(roleId) {
        const result = await this.getInstance()
            .select('p.id', 'p.name', 'p.slug', 'p.description')
            .from({ p: this.tableName })
            .innerJoin({ rp: 'role_permission' }, 'rp.permission_id', 'p.id')
            .where('rp.role_id', roleId.getId);
        if (!result) {
            return null;
        }
        return this.getPermissionCollection(result);
    }
    getPermissionCollection(result) {
        const rows = result.map(row => new permission_1.Permission(new permission_id_1.PermissionId(row.id), row.name ?? null, row.slug ?? null, row.description ?? null));
        return new permission_collection_1.PermissionCollection(rows);
    }
}
exports.permissionRepository = permissionRepository;
//# sourceMappingURL=permission-repository.js.map