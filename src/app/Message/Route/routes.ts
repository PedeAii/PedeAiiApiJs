import { Router } from 'express';
import { MessageController } from '../Controller/messages-controller';

const messageController = new MessageController();
const messageRouter = Router();

messageRouter.post('/message', messageController.create)

export { messageRouter }