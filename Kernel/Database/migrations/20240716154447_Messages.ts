import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.withSchema('public').createTable('text_messages', (table) => {
        table.increments('id').unique();
        table.string('ulid').primary().index('ulid');
        table.string('message');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamp('deleted_at').nullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.withSchema('public').dropTableIfExists('text_messages');
}

