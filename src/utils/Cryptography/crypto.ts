import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto';

export class Cryptography {

    /**
     * @description hash password
     * @param {string} userPassword
     * @returns
     */
    public static async hashPassword(userPassword:string) {
      const salt = randomBytes(16).toString('base64');
      const hash = await new Promise<Buffer>((resolve, reject) => {
        scrypt(userPassword, salt, 64, (err, derivedKey) => {
          if (err) reject(err);
          resolve(derivedKey);
        });
      });
      userPassword = `${salt}@${hash.toString('base64')}`;
      return userPassword;
    };
    
    /**
     * @description compare password
     * @param {string} userPassword senha provida no corpo da requisição
     * @param {string} password senha do banco
     * @returns boolean
     */
    public static async comparePassword(userPassword: string, password: string) {
      const [salt, key] = userPassword.split('@');
      const hashedBuffer = await new Promise<Buffer>((resolve, reject) => {
        scrypt(password, salt, 64, (err, derivedKey) => {
          if (err) reject(err);
          resolve(derivedKey);
        });
      });
    
      const keyBuffer = Buffer.from(key, 'base64');
    
      return timingSafeEqual(hashedBuffer, keyBuffer);
  }
};
