import { Database } from "../../../../../../Kernel/Database/Knex"
import { CreatedAt } from "../../../../../utils/Date/created-at";
import { DeletedAt } from "../../../../../utils/Date/deleted-at";
import { UpdatedAt } from "../../../../../utils/Date/updated-at";
import { AddressId } from "../../../../Address/Domain/Entity/address-id";
import { RoleId } from "../../../Profile/Role/Domain/Entity/role-id";
import { User } from "../../Domain/Entity/user";
import { UserId } from "../../Domain/Entity/user-id";
import { IUserRepository } from "./i-user-repository";

export class UserRepository extends Database implements IUserRepository {
    protected tableName = 'user';

    constructor() {super();}

    async getByEmail(email: string): Promise<User | null> {
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

    getUser(result: any): User {
        return new User(
            new UserId(result.id),
            new RoleId(result.role_id ?? null),
            new AddressId(result.address_id ?? null),
            result.username ?? null,
            result.email ?? null,
            result.password ?? null,
            result.phone,
            result.document,
            result.status,
            new CreatedAt(result.created_at),
            new UpdatedAt(result.updated_at),
            new DeletedAt(result.deleted_at)
        );
    }
}
