import { Database } from "../../../../../../../Kernel/Database/Knex";
import { RoleId } from "../../../Role/Domain/Entity/role-id";
import { Permission } from "../../Domain/Entity/permission";
import { PermissionCollection } from "../../Domain/Entity/permission-collection";
import { PermissionId } from "../../Domain/Entity/permission-id";
import { IPermissionRepository } from "./i-permission-repository";

export class permissionRepository extends Database implements IPermissionRepository{
    protected tableName = 'permission';

    constructor() {super();}

    async getPermissionsByRoleId(roleId: RoleId): Promise<PermissionCollection | null> {
        const result = await this.getInstance()
            .select(
                'p.id',
                'p.name',
                'p.slug',
                'p.description'
            )
            .from({ p: this.tableName })
            .innerJoin({ rp: 'role_permission'}, 'rp.permission_id', 'p.id')
            .where('rp.role_id', roleId.getId);

        if (!result) {
            return null
        }
        
        return this.getPermissionCollection(result)
    }

    protected getPermissionCollection(result: any[]): PermissionCollection {
        const rows = result.map(row => new Permission(
            new PermissionId(row.id),
            row.name ?? null,
            row.slug ?? null,
            row.description ?? null
        ));
    
        return new PermissionCollection(rows);
    }
}
