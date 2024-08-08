import { Request, Response, Router } from "express";
import { WhatsAppWebHookController } from "../Controller/whatsapp-web-hook-controller";
import { WhatsAppWebHookService } from "../Domain/Service/whatsapp-web-hook-service";

const whatsAppWebHookRouter = Router();

const whatsAppWebHook = new WhatsAppWebHookController(new WhatsAppWebHookService());
whatsAppWebHookRouter.get('/webhook/message', whatsAppWebHook.test);

whatsAppWebHookRouter.get('/webhook', (req: Request, res: Response) => whatsAppWebHook.verify(req, res));
whatsAppWebHookRouter.post('/webhook', (req: Request, res: Response) => whatsAppWebHook.execute(req, res));

export { whatsAppWebHookRouter };
