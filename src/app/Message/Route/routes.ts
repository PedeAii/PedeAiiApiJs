import { Request, Response, Router } from 'express';
import { MessageController } from '../Controller/messages-controller';
import { container } from '../../../../Kernel/Container/Container';

const messageController = container.get<MessageController>(MessageController);

const messageRouter = Router();

messageRouter.post('/message', async function (req: Request, res: Response) {
  return messageController.create(req, res)
});

export { messageRouter };
