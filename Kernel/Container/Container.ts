import 'reflect-metadata'
import { container } from "tsyringe";
import { IMessageService } from "src/app/Message/Domain/Services/IMessageService";
import { MessageService } from "src/app/Message/Domain/Services/MessageService";
import { TextMessagesRepository } from "src/app/Message/Infrastructure/Repositories/TextMessagesRepository";

container.registerSingleton<IMessageService>("IMessageService", MessageService);
container.registerSingleton("IMessageService", TextMessagesRepository);
