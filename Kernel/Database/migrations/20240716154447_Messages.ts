import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.withSchema('public').createTable('text_messages', (table) => {
        table.increments('id', { primaryKey: true }).unique({ indexName: 'id' });
        table.string('ulid').primary().index('ulid');
        table.string('message');
        table.timestamps(true, true);
        table.timestamp('deleted_at').nullable();
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.withSchema('public').dropTableIfExists('text_messages');
}

