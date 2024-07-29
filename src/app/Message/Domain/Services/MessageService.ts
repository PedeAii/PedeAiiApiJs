import { TextMessagesEntity } from "../Entity/TextMessageEntity";
import { IMessageService } from "./IMessageService";

export class MessageService implements IMessageService {
    constructor(private readonly messageRepository: IMessageService) {}
    create(message: TextMessagesEntity): Promise<TextMessagesEntity> {
        throw new Error("Method not implemented.");
    }
    getMessages(): Promise<TextMessagesEntity[]> {
        throw new Error("Method not implemented.");
    }
    getMessagesById(id: string): Promise<TextMessagesEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, message: Partial<TextMessagesEntity>): Promise<TextMessagesEntity> {
        throw new Error("Method not implemented.");
    }
 
}
