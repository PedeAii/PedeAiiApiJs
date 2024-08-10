import { User } from "../../Domain/Entity/user";

export interface IUserRepository {
    getByEmail(email: string): Promise<User | null>
}
