"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cryptography = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const node_crypto_1 = require("node:crypto");
class Cryptography {
    static timestamp = Date.now() / 1000;
    /**
     * @description hash password
     * @param {string} password
     * @returns string
     */
    static async hashPassword(password) {
        const salt = (0, node_crypto_1.randomBytes)(16).toString("base64");
        const hash = await new Promise((resolve, reject) => {
            (0, node_crypto_1.scrypt)(password, salt, 64, (err, derivedKey) => {
                if (err)
                    reject(err);
                resolve(derivedKey);
            });
        });
        return `${salt}@${hash.toString("base64")}`;
    }
    /**
     * @description compare password
     * @param {string} password senha provida no corpo da requisição
     * @param {string} userPassword senha do banco
     * @returns boolean
     */
    static async comparePassword(password, userPassword) {
        const [salt, key] = userPassword.split("@");
        const hashedBuffer = await new Promise((resolve, reject) => {
            (0, node_crypto_1.scrypt)(password, salt, 64, (err, derivedKey) => {
                if (err)
                    reject(err);
                resolve(derivedKey);
            });
        });
        const keyBuffer = Buffer.from(key, "base64");
        return (0, node_crypto_1.timingSafeEqual)(hashedBuffer, keyBuffer);
    }
    /**
     * @description generate ulid
     * @returns string
     */
    static ulid() {
        const timestamp = Math.floor(this.timestamp).toString(36);
        const randomness = (0, node_crypto_1.randomBytes)(10).toString('hex');
        return `${timestamp}${randomness}`;
    }
    static jwtEncoded(value) {
        return (0, jsonwebtoken_1.sign)(value, process.env.APP_SECRET);
    }
}
exports.Cryptography = Cryptography;
//# sourceMappingURL=Cryptography.js.map