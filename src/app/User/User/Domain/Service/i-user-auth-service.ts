import { UserAuthDto } from "../../Controller/dto/user-auth-dto";
import { UserAuthToken } from "../Entity/user-auth-token";

export interface IUserAuthService {
    auth(userAuthDto: UserAuthDto): Promise<UserAuthToken>;
}
