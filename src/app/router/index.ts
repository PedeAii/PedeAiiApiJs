import { Router } from 'express';
import { WebHookRouter } from './WeHookRouter';
import { AuthRouter } from './AuthRouter';

export const router = Router();
// @todo adicionar middlewares para autenticar
router.use(WebHookRouter);
