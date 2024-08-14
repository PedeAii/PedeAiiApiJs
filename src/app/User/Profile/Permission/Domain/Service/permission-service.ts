import { inject, injectable } from "inversify";
import { RoleIdDto } from "../../Controller/dto/role-id-dto";
import { IPermissionService } from "./i-permission-service";
import { IPermissionRepository } from "../../Infrastructure/Repository/i-permission-repository";
import { PermissionCollection } from "../Entity/permission-collection";
import { RoleId } from "../../../Role/Domain/Entity/role-id";
import { NotFound } from "../../../../../../../Kernel/Http/NotFound";

@injectable()
export class PermissionService implements IPermissionService {
    constructor(
        @inject('IPermissionRepository') private readonly permissionRepository: IPermissionRepository
    ) { }

    async getPermissionsByRoleId(roleIdDto: RoleIdDto): Promise<PermissionCollection> {
        const roleId = new RoleId(roleIdDto.roleId);
        const permissionCollection = await this.permissionRepository.getPermissionsByRoleId(roleId);

        if (!permissionCollection) {
            throw new NotFound(['Permission not found']);
        }

        return permissionCollection;
    }
}
