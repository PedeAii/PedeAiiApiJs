import { RoleIdDto } from "../../Controller/dto/role-id-dto";
import { PermissionCollection } from "../Entity/permission-collection";

export interface IPermissionService {
    getPermissionsByRoleId(roleIdDto: RoleIdDto): Promise<PermissionCollection>;
}
