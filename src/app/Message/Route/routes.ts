import { Router } from 'express';
import { MessageController } from '../Controller/messages-controller';
import { container } from 'tsyringe';
import '../../../../Kernel/Container/Container';

const messageController = container.resolve(MessageController);

const messageRouter = Router();

messageRouter.post('/message', messageController.create)

export { messageRouter }