import { Router } from 'express';
import { MessageController } from '../Controller/messages-controller';
import { container } from 'Kernel/Container/Container';
import { MessageService } from '../Domain/Services/MessageService';
import { IMessageService } from '../Domain/Services/IMessageService';

container.register<IMessageService>('IMessageService', MessageService);
const messageService = container.resolve<IMessageService>('IMessageService');

const messageController = new MessageController(messageService);
const messageRouter = Router();

messageRouter.post('/message', messageController.create)

export { messageRouter }