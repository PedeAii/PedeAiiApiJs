import { Request, Response, Router } from 'express';
import { MessageController } from '../Controller/messages-controller';
import { container } from '../../../../Kernel/Container/Container';

const messageController = container.get<MessageController>(MessageController);

const messageRouter = Router();

messageRouter.post('/message', async (req: Request, res: Response) => messageController.create(req, res));

export { messageRouter };
