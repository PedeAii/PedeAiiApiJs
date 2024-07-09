import { Router } from 'express';
import WhatsAppWebHookController from '../Controllers/WebHookController/WhatsAppWebHook/index.js';

export const WebHookRouter = new Router();

WebHookRouter.get('/webhook', WhatsAppWebHookController.verify);
WebHookRouter.post('/webhook', WhatsAppWebHookController.execute);
