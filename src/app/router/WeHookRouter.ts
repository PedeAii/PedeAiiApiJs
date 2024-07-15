import { Router } from 'express';
import WhatsAppWebHookController from '../Controllers/WebHookController/WhatsAppWebHook';

export const WebHookRouter = Router();

WebHookRouter.get('/webhook', WhatsAppWebHookController.verify);
WebHookRouter.post('/webhook', WhatsAppWebHookController.execute);
