import AuthUserController from '../Controllers/AuthUserController';
import { Router } from 'express';

export const AuthRouter = Router();

AuthRouter.get('/auth', AuthUserController.execute);
