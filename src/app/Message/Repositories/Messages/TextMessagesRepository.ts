import { Database } from "Kernel/Database/Knex";
import { TextMessagesEntity } from "Kernel/Entities/TextMessageEntity/TextMessageEntity";
import { Cryptography } from "src/utils/Cryptography/Cryptography";


export class TextMessagesRepository {
    protected tableName = 'text_messages';

    constructor() {}

    public async getMessages(): Promise<TextMessagesEntity[]> {
        return Database.getInstance().select('ulid', 'message').from(this.tableName);
    }

    public async getMessagesByUlid(ulid: string): Promise<TextMessagesEntity> {
        return Database.getInstance().select('ulid', 'message').from(this.tableName).where({ ulid }).first();
    }

    public async create(messages: TextMessagesEntity): Promise<TextMessagesEntity> {
        const [newEntity]: TextMessagesEntity[] = await Database.getInstance().insert({
            ulid: Cryptography.ulid(),
            ...messages
        }).into(this.tableName).returning(['ulid', 'message']);

        return newEntity;
    }

    public async update(ulid: string, messages: Partial<TextMessagesEntity>): Promise<TextMessagesEntity> {
        return Database.getInstance().update(messages).from(this.tableName).where({ ulid }).returning('*').first();
    }

    public async delete(ulid: string): Promise<void> {
        return Database.getInstance().from(this.tableName).where('ulid', ulid).update({ deleted_at: new Date() });
    }
}

