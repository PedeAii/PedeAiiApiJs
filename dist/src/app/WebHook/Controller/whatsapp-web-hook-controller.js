"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsAppWebHookController = void 0;
class WhatsAppWebHookController {
    whatsAppWebHookService;
    constructor(whatsAppWebHookService) {
        this.whatsAppWebHookService = whatsAppWebHookService;
    }
    async test(req, res) {
        return res.status(200).json({ ok: true });
    }
    async execute(req, res) {
        //Passar por TDO
        return this.whatsAppWebHookService.execute(req, res);
    }
    async verify(req, res) {
        //Passar por TDO
        return this.whatsAppWebHookService.verify(req, res);
    }
}
exports.WhatsAppWebHookController = WhatsAppWebHookController;
//# sourceMappingURL=whatsapp-web-hook-controller.js.map