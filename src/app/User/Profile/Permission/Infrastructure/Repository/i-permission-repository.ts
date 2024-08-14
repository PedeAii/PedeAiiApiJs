import { RoleId } from "../../../Role/Domain/Entity/role-id";
import { PermissionCollection } from "../../Domain/Entity/permission-collection";

export interface IPermissionRepository {
    getPermissionsByRoleId(roleId: RoleId): Promise<PermissionCollection | null>
}