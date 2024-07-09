import { Router } from 'express';
import { WebHookRouter } from './WeHookRouter.js';
import { AuthRouter } from './AuthRouter.js';

export const router = new Router();
// @todo adicionar middlewares para autenticar
router.use(WebHookRouter);
