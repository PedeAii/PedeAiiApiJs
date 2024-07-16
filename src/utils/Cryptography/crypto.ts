import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto';

/**
 * @description hash password
 * @param {string} userPassword
 * @returns
 */
export async function hashPassword(userPassword) {
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
export async function comparePassword(userPassword, password) {
  const [salt, key] = userPassword.split('@');
  const hashedBuffer = await new Promise<Buffer>((resolve, reject) => {
    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(derivedKey);
    });
  });

  const keyBuffer = Buffer.from(key, 'base64');

  return timingSafeEqual(hashedBuffer, keyBuffer);
};
