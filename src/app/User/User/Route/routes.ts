import { Request, Response, Router } from 'express';
import { UserController } from "../Controller/user-controller";
import { container } from "../../../../../Kernel/Container/Container";

const userController = container.get<UserController>(UserController);

const userRouter = Router();

userRouter.post('/api/user/auth', async (req: Request, res: Response) => userController.execute(req, res));

export { userRouter };
