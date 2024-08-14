import { Collection } from "../../../../../../utils/Entity/collection";
import { Permission } from "./permission";

export class PermissionCollection extends Collection<Permission> {
    constructor(permission: Permission[] = []) {
        super(permission);
    }
}
