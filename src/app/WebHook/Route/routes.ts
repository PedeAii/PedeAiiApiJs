import { Router } from "express";
import { WhatsAppWebHookController } from "../Controller/whatsapp-web-hook-controller";

const whatsAppWebHookRouter = Router();

const whatsAppWebHook = new WhatsAppWebHookController();
whatsAppWebHookRouter.get('/webhook/message', whatsAppWebHook.execute);

export { whatsAppWebHookRouter };
