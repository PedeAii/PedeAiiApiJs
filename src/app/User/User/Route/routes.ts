import { Router } from "express";
import { UserAuthController } from "../Controller/user-auth-controller";

const userRouter = Router();

const userAuthController = new UserAuthController();
userRouter.get('/api/user/auth', userAuthController.execute);

export { userRouter };
