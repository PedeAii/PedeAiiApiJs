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
exports.UserController = void 0;
const inversify_1 = require("inversify");
const user_auth_dto_1 = require("./dto/user-auth-dto");
const Success_1 = require("../../../../../Kernel/Http/Success");
let UserController = class UserController {
    userAuthService;
    constructor(userAuthService) {
        this.userAuthService = userAuthService;
    }
    async execute(req, res) {
        const { email, password } = req.body;
        const output = await this.userAuthService.auth(new user_auth_dto_1.UserAuthDto(email, password));
        const success = new Success_1.Success(output.jsonSerialize());
        return res.json(success.render());
    }
};
exports.UserController = UserController;
exports.UserController = UserController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)('IUserAuthService')),
    __metadata("design:paramtypes", [Object])
], UserController);
//# sourceMappingURL=user-controller.js.map