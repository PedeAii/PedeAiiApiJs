import AuthUserController from '../Controllers/AuthUserController/index.js';
import { Router } from 'express';

export const AuthRouter = Router();

AuthRouter.get('/auth', AuthUserController.execute);
