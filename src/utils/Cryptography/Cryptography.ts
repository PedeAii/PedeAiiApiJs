import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);


export class Cryptography {

  private static timestamp = Date.now() / 1000;
    /**
     * @description hash password
     * @param {string} userPassword
     * @returns string
     */
    public static async hashPassword(userPassword: string) {
      const salt = randomBytes(16).toString('base64');
      const hash = await new Promise<Buffer>((resolve, reject) => {
        scrypt(userPassword, salt, 64, (err, derivedKey) => {
          if (err) reject(err);
          resolve(derivedKey);
        });
      });

      return `${salt}@${hash.toString('base64')}`;
    };
    
    /**
     * @description compare password
     * @param {string} userPassword senha provida no corpo da requisição
     * @param {string} password senha do banco
     * @returns boolean
     */
    public static async comparePassword(userPassword: string, hashedPassword: string): Promise<boolean> {
      try {
        const [salt, storedHash] = hashedPassword.split('@');
        const derivedKey = await scryptAsync(userPassword, salt, 64);
        const hashedBuffer = Buffer.from(derivedKey.toString('base64'), 'base64');
        const keyBuffer = Buffer.from(storedHash, 'base64');
  
        return timingSafeEqual(hashedBuffer, keyBuffer);
      } catch (error) {
        console.error('Error comparing password:', error);
        throw new Error('Could not compare password');
      }
    }
  
  /**
   * @description generate ulid
   * @returns string
   */
  public static ulid(): string {
    const timestamp = Math.floor(this.timestamp).toString(36);
    const randomness = randomBytes(10).toString('hex');

    return `${timestamp}${randomness}`;
  }
};
