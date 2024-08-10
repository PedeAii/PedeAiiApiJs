import { Container } from "inversify";
import { IMessageService } from "../../src/app/Message/Domain/Services/IMessageService";
import { MessageService } from "../../src/app/Message/Domain/Services/MessageService";
import { ITextMessagesRepository } from "../../src/app/Message/Infrastructure/Repositories/ITextMessageRepository";
import { TextMessagesRepository } from "../../src/app/Message/Infrastructure/Repositories/TextMessagesRepository";
import { MessageController } from '../../src/app/Message/Controller/messages-controller';
import { UserController } from "../../src/app/User/User/Controller/user-controller";
import { IUserAuthService } from "../../src/app/User/User/Domain/Service/i-user-auth-service";
import { UserAuthService } from "../../src/app/User/User/Domain/Service/user-auth-service";
import { IUserRepository } from "../../src/app/User/User/Infrastructura/Repository/i-user-repository";
import { UserRepository } from "../../src/app/User/User/Infrastructura/Repository/user-repository";

const container = new Container();

// Message

container.bind<IMessageService>("IMessageService").to(MessageService);
container.bind<ITextMessagesRepository>("ITextMessagesRepository").to(TextMessagesRepository);
container.bind<MessageController>(MessageController).toSelf();

// User

container.bind<IUserAuthService>("IUserAuthService").to(UserAuthService);
container.bind<IUserRepository>("IUserRepository").to(UserRepository)
container.bind<UserController>(UserController).toSelf();

export { container };
