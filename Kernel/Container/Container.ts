import { Container } from "inversify";
import { IMessageService } from "../../src/app/Message/Domain/Services/IMessageService";
import { MessageService } from "../../src/app/Message/Domain/Services/MessageService";
import { ITextMessagesRepository } from "../../src/app/Message/Infrastructure/Repositories/ITextMessageRepository";
import { TextMessagesRepository } from "../../src/app/Message/Infrastructure/Repositories/TextMessagesRepository";
import { MessageController } from '../../src/app/Message/Controller/messages-controller';

const container = new Container();

container.bind<IMessageService>("IMessageService").to(MessageService);
container.bind<ITextMessagesRepository>("ITextMessagesRepository").to(TextMessagesRepository);
container.bind<MessageController>(MessageController).toSelf();

export { container };
