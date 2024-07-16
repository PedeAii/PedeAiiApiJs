import { Database } from "Kernel/Database/Knex";
import { TextMessagesModel } from "Kernel/Models/Message/Message";


export class TextMessagesRepository {
    protected tableName = 'text_messages';

    constructor(
        messages: TextMessagesModel
    ) {
    }

    public async getMessages(): Promise<TextMessagesModel[]> {
        return Database.getInstance().select('*').from(this.tableName);
    }

    public async getMessagesByUlid(ulid: string): Promise<TextMessagesModel[]> {
        return Database.getInstance().select('*').from(this.tableName).where('ulid', ulid);
    }
}

