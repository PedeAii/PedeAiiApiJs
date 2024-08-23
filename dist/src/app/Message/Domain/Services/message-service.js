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
exports.MessageService = void 0;
const inversify_1 = require("inversify");
let MessageService = class MessageService {
    messageRepository;
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }
    async create(message) {
        return this.messageRepository.create(message);
    }
    async getMessages() {
        return this.messageRepository.getMessages();
    }
    async getMessagesById(id) {
        return this.messageRepository.getMessagesById(id);
    }
    async update(id, message) {
        return this.messageRepository.update(id, message);
    }
    async delete(ulid) {
        return this.messageRepository.delete(ulid);
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)('ITextMessagesRepository')),
    __metadata("design:paramtypes", [Object])
], MessageService);
//# sourceMappingURL=message-service.js.map