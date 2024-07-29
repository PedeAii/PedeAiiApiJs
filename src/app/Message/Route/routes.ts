import { Router } from 'express';
import { MessageController } from '../Controller/messages-controller';
import { container } from '../../../../Kernel/Container/Container';

const messageController = container.get<MessageController>(MessageController);

const messageRouter = Router();

messageRouter.post('/message', (req, res) => messageController.create(req, res));

export { messageRouter };
