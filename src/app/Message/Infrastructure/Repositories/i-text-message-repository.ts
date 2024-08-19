import { TextMessagesEntity } from "../../Domain/Entity/text-message-entity";

export interface ITextMessagesRepository {
    create(message: TextMessagesEntity): Promise<TextMessagesEntity>;

    getMessages(): Promise<TextMessagesEntity[]>;

    getMessagesById(id: string): Promise<TextMessagesEntity>;

    update(id: string, message: Partial<TextMessagesEntity>): Promise<TextMessagesEntity>;

    delete(ulid: string): Promise<void>
}