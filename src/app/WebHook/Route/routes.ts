import { Router } from "express";
import { WhatsAppWebHookController } from "../Controller/whatsapp-web-hook-controller";

const whatsAppWebHookRouter = Router();

const whatsAppWebHook = new WhatsAppWebHookController();
whatsAppWebHookRouter.get('/webhook/message', whatsAppWebHook.test);

// whatsAppWebHookRouter.get('/webhook', whatsAppWebHook.verify);
// whatsAppWebHookRouter.post('/webhook', whatsAppWebHook.execute);

export { whatsAppWebHookRouter };
