import * as jwt from 'jsonwebtoken';
import { comparePassword } from '../../../utils/crypto.js'

export class AuthUserService {
  // async execute(email: string, password: string) {
  //   const user = await User.findOne({ email });

  //   if (!user) {
  //     throw new Error("User or password invalid");
  //   }
  //   const passwordMatch = await comparePassword(password, user.password);

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
}

