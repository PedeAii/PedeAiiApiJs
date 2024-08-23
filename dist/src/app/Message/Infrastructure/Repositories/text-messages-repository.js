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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextMessagesRepository = void 0;
const Knex_1 = require("../../../../../Kernel/Database/Knex");
const Cryptography_1 = require("../../../../utils/Cryptography/Cryptography");
const inversify_1 = require("inversify");
let TextMessagesRepository = class TextMessagesRepository extends Knex_1.Database {
    tableName = 'text_messages';
    constructor() { super(); }
    async getMessages() {
        return this.getInstance().select('ulid', 'message').from(this.tableName).where({ deleted_at: null });
    }
    async getMessagesById(ulid) {
        return this.getInstance().select('ulid', 'message').from(this.tableName).where({ ulid, deleted_at: null }).first();
    }
    async create(message) {
        const [newEntity] = await this.getInstance().insert({
            ulid: Cryptography_1.Cryptography.ulid(),
            message
        }).into(this.tableName).returning(['ulid', 'message']);
        return newEntity;
    }
    async update(ulid, message) {
        return this.getInstance().update(message).from(this.tableName).where({ ulid }).returning('*').first();
    }
    async delete(ulid) {
        return this.getInstance().from(this.tableName).where('ulid', ulid).update({ deleted_at: new Date() });
    }
};
exports.TextMessagesRepository = TextMessagesRepository;
exports.TextMessagesRepository = TextMessagesRepository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], TextMessagesRepository);
//# sourceMappingURL=text-messages-repository.js.map