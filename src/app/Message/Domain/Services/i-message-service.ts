import { TextMessagesEntity } from "../Entity/text-message-entity";

export interface IMessageService {
    create(message: TextMessagesEntity): Promise<TextMessagesEntity>;

    getMessages(): Promise<TextMessagesEntity[]>;

    getMessagesById(id: string): Promise<TextMessagesEntity>;

    update(id: string, message: Partial<TextMessagesEntity>): Promise<TextMessagesEntity>;
}