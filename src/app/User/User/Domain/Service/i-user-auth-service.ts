import { UserAuthDto } from "../../Controller/dto/user-auth-dto";

export interface IUserAuthService {
    auth(userAuthDto: UserAuthDto): Promise<boolean>;
}
