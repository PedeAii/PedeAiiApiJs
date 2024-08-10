import { CreatedAt } from "../../../../../utils/Date/created-at";
import { DeletedAt } from "../../../../../utils/Date/deleted-at";
import { UpdatedAt } from "../../../../../utils/Date/updated-at";
import { AddressId } from "../../../../Address/Domain/Entity/address-id";
import { RoleId } from "../../../Profile/Role/Domain/Entity/role-id";
import { UserId } from "./user-id";

export class User {
    constructor(
        public readonly id: UserId,
        public readonly roleId: RoleId,
        public readonly addressId: AddressId,
        public readonly username: string,
        public readonly email: string,
        public readonly password: string,
        public readonly phone: string,
        public readonly document: string,
        public readonly userStatus: UserStatus,
        public readonly createdAt: CreatedAt,
        public readonly updatedAt: UpdatedAt,
        public readonly deletedAt: DeletedAt,
    ) {}
}
