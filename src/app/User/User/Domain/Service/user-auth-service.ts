import * as jwt from 'jsonwebtoken';
import { Cryptography } from '../../../../../utils/Cryptography/Cryptography.js'
import { injectable } from 'inversify';
import { UserAuthDto } from '../../Controller/dto/user-auth-dto.js';

@injectable()
export class UserAuthService {
	constructor() {

	}

	async auth(userAuthDto: UserAuthDto) {

	}
}

  // async execute(email: string, password: string) {
  //   const user = await User.findOne({ email });

  //   if (!user) {
  //     throw new Error("User or password invalid");
  //   }
  //   const passwordMatch = await Cryptography.comparePassword(password, user.password);

  //   if (!passwordMatch) {
  //     throw new Error("User or password invalid");
  //   }

  //   const payload = {
  //     name: user.name,
  //     email: user.email,
  //     id: user.id
  //   };

  //   const options = {
  //     subject: user.id,
  //     expiresIn: '1d'
  //   };

  //   const token = jwt.sign(payload, 'JWT_SCRET', options);

  //   return {
  //     id: user.id,
  //     name: user.name,
  //     email: user.email,
  //     token
  //   }
  // }