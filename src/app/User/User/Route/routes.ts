import { Router } from "express";
import { UserAuthController } from "../Controller/user-auth-controller";

const userAuthRouter = Router();

const userAuthController = new UserAuthController();
userAuthRouter.get('/api/user/auth', userAuthController.execute);

export { userAuthRouter };
