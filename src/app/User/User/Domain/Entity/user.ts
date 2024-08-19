import { UnprocessableEntity } from "../../../../../../Kernel/Http/UnprocessableEntity";
import { CreatedAt } from "../../../../../utils/Date/created-at";
import { DeletedAt } from "../../../../../utils/Date/deleted-at";
import { UpdatedAt } from "../../../../../utils/Date/updated-at";
import { Cpf } from "../../../../../utils/Entity/cpf";
import { Email } from "../../../../../utils/Entity/email";
import { AddressId } from "../../../../Address/Domain/Entity/address-id";
import { RoleId } from "../../../Profile/Role/Domain/Entity/role-id";
import { UserId } from "./user-id";
import { UserStatus } from "./user-status";

export class User {
    constructor(
        public readonly id: UserId,
        public readonly roleId: RoleId,
        public readonly addressId: AddressId,
        public readonly username: string | null,
        public readonly email: Email,
        public readonly password: string,
        public readonly phone: string | null,
        public readonly document: Cpf,
        public readonly userStatus: UserStatus,
        public readonly createdAt: CreatedAt,
        public readonly updatedAt: UpdatedAt,
        public readonly deletedAt: DeletedAt,
    ) {
        this.userVelidate();
    }

    private userVelidate() {
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
            throw new UnprocessableEntity(errors);
        }

        return true;
    }

    public jsonSerialize(): Object {
        return {
            'id': this.id.getIdEncoded,
            'roleId': this.roleId.getIdEncoded,
            'addressId': this.addressId.getIdEncoded,
            'username': this.username,
            'email': this.email.email,
            'phone': this.phone,
            'userStatus': this.userStatus.getStatus()
        }
    }
}
