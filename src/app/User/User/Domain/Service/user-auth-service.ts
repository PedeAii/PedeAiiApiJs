import { Cryptography } from '../../../../../utils/Cryptography/Cryptography.js'
import { inject, injectable } from 'inversify';
import { UserAuthDto } from '../../Controller/dto/user-auth-dto.js';
import { IUserRepository } from '../../Infrastructura/Repository/i-user-repository.js';
import { User } from '../Entity/user.js';
import { UnprocessableEntity } from '../../../../../../Kernel/Http/UnprocessableEntity.js';
import { Unauthorized } from '../../../../../../Kernel/Http/Unauthorized.js';
import { sign } from 'jsonwebtoken';
import { IUserAuthService } from './i-user-auth-service.js';
import { UserAuthToken } from '../Entity/user-auth-token.js';

@injectable()
export class UserAuthService implements IUserAuthService {
    constructor(
        @inject('IUserRepository') private readonly userRepository: IUserRepository
    ) { }

    async auth(userAuthDto: UserAuthDto): Promise<UserAuthToken> {
        if (!userAuthDto.email || !userAuthDto.password) {
            throw new UnprocessableEntity(['Invalid credentials'])
        }

        const currentUser = await this.userRepository.getByEmail(userAuthDto.email)
        if (!currentUser) {
            throw new UnprocessableEntity(['Invalid credentials'])
        }

        await this.compareAuthentication(userAuthDto.password, currentUser.password)

        return this.generateToken(currentUser);
    }

    private async compareAuthentication(password: string, currentPassword: string): Promise<boolean> {
        const passwordMatch = await Cryptography.comparePassword(password, currentPassword);
        if (!passwordMatch) {
            throw new Unauthorized(['Invalid credentials']);
        }

        return true;
    }

    private generateToken(user: User): UserAuthToken {
        const token = sign(user.jsonSerialize(), process.env.APP_SECRET as string, {
            subject: user.id.getId?.toString(),
            expiresIn: "3h",
        });

        return new UserAuthToken(token);
    }
}
