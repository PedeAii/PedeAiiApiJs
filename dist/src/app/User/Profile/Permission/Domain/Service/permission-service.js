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
exports.PermissionService = void 0;
const inversify_1 = require("inversify");
const role_id_1 = require("../../../Role/Domain/Entity/role-id");
const NotFound_1 = require("../../../../../../../Kernel/Http/NotFound");
let PermissionService = class PermissionService {
    permissionRepository;
    constructor(permissionRepository) {
        this.permissionRepository = permissionRepository;
    }
    async getPermissionsByRoleId(roleIdDto) {
        const roleId = new role_id_1.RoleId(roleIdDto.roleId);
        const permissionCollection = await this.permissionRepository.getPermissionsByRoleId(roleId);
        if (!permissionCollection) {
            throw new NotFound_1.NotFound(['Permission not found']);
        }
        return permissionCollection;
    }
};
exports.PermissionService = PermissionService;
exports.PermissionService = PermissionService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)('IPermissionRepository')),
    __metadata("design:paramtypes", [Object])
], PermissionService);
//# sourceMappingURL=permission-service.js.map