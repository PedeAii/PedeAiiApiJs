import { Database } from "../../../../../Kernel/Database/Knex";
import { TextMessagesEntity } from "../../Domain/Entity/text-message-entity";
import { Cryptography } from "../../../../utils/Cryptography/Cryptography";
import { ITextMessagesRepository } from "./i-text-message-repository";
import { injectable } from "inversify";

@injectable()
export class TextMessagesRepository extends Database implements ITextMessagesRepository {
    protected tableName = 'text_messages';

    constructor() {super();}

    public async getMessages(): Promise<TextMessagesEntity[]> {
        return this.getInstance().select('ulid', 'message').from(this.tableName).where({ deleted_at: null });
    }

    public async getMessagesById(ulid: string): Promise<TextMessagesEntity> {
        return this.getInstance().select('ulid', 'message').from(this.tableName).where({ ulid, deleted_at: null }).first();
    }

    public async create(message: TextMessagesEntity): Promise<TextMessagesEntity> {
        const [newEntity]: TextMessagesEntity[] = await this.getInstance().insert({
            ulid: Cryptography.ulid(),
            message
        }).into(this.tableName).returning(['ulid', 'message']);

        return newEntity;
    }

    public async update(ulid: string, message: Partial<TextMessagesEntity>): Promise<TextMessagesEntity> {
        return this.getInstance().update(message).from(this.tableName).where({ ulid }).returning('*').first();
    }

    public async delete(ulid: string): Promise<void> {
        return this.getInstance().from(this.tableName).where('ulid', ulid).update({ deleted_at: new Date() });
    }
}

