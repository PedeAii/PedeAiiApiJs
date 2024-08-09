import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.withSchema('public').createTable('user', (table) => {
        table.increments('id', { primaryKey: true }).unique({ indexName: 'id' });
        table.integer('role_id');
        table.integer('address_id');
        table.string('username', 255);
        table.string('email', 255);
        table.string('password');
        table.string('phone', 13);
        table.string('document', 20);
        table.string('status', 50);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamp('deleted_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.withSchema('public').dropTableIfExists('user');
}

