"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
const express_1 = require("express");
const messages_controller_1 = require("../Controller/messages-controller");
const Container_1 = require("../../../../Kernel/Container/Container");
const messageController = Container_1.container.get(messages_controller_1.MessageController);
const messageRouter = (0, express_1.Router)();
exports.messageRouter = messageRouter;
messageRouter.post('/message', async (req, res) => messageController.create(req, res));
//# sourceMappingURL=routes.js.map