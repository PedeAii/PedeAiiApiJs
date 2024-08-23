"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthService = void 0;
const Cryptography_js_1 = require("../../../../../utils/Cryptography/Cryptography.js");
const inversify_1 = require("inversify");
const UnprocessableEntity_js_1 = require("../../../../../../Kernel/Http/UnprocessableEntity.js");
const Unauthorized_js_1 = require("../../../../../../Kernel/Http/Unauthorized.js");
const jsonwebtoken_1 = require("jsonwebtoken");
const user_auth_token_js_1 = require("../Entity/user-auth-token.js");
let UserAuthService = class UserAuthService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async auth(userAuthDto) {
        if (!userAuthDto.email || !userAuthDto.password) {
            throw new UnprocessableEntity_js_1.UnprocessableEntity(['Invalid credentials']);
        }
        const currentUser = await this.userRepository.getByEmail(userAuthDto.email);
        if (!currentUser) {
            throw new UnprocessableEntity_js_1.UnprocessableEntity(['Invalid credentials']);
        }
        await this.compareAuthentication(userAuthDto.password, currentUser.password);
        return this.generateToken(currentUser);
    }
    async compareAuthentication(password, currentPassword) {
        const passwordMatch = await Cryptography_js_1.Cryptography.comparePassword(password, currentPassword);
        if (!passwordMatch) {
            throw new Unauthorized_js_1.Unauthorized(['Invalid credentials']);
        }
        return true;
    }
    generateToken(user) {
        const token = (0, jsonwebtoken_1.sign)(user.jsonSerialize(), process.env.APP_SECRET, {
            subject: user.id.getId?.toString(),
            expiresIn: "3h",
        });
        return new user_auth_token_js_1.UserAuthToken(token);
    }
};
exports.UserAuthService = UserAuthService;
exports.UserAuthService = UserAuthService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)('IUserRepository')),
    __metadata("design:paramtypes", [Object])
], UserAuthService);
//# sourceMappingURL=user-auth-service.js.map