"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whatsAppWebHookRouter = void 0;
const express_1 = require("express");
const whatsapp_web_hook_controller_1 = require("../Controller/whatsapp-web-hook-controller");
const whatsapp_web_hook_service_1 = require("../Domain/Service/whatsapp-web-hook-service");
const whatsAppWebHookRouter = (0, express_1.Router)();
exports.whatsAppWebHookRouter = whatsAppWebHookRouter;
const whatsAppWebHook = new whatsapp_web_hook_controller_1.WhatsAppWebHookController(new whatsapp_web_hook_service_1.WhatsAppWebHookService());
whatsAppWebHookRouter.get('/webhook/message', whatsAppWebHook.test);
whatsAppWebHookRouter.get('/webhook', (req, res) => whatsAppWebHook.verify(req, res));
whatsAppWebHookRouter.post('/webhook', (req, res) => whatsAppWebHook.execute(req, res));
//# sourceMappingURL=routes.js.map