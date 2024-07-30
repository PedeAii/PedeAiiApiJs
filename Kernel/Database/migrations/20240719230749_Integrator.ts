import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.withSchema('public').createTable('integrator', (table) => {
        table.increments('id', { primaryKey: true }).unique({ indexName: 'id' });
        table.string('username');
        table.string('password');
        table.string('status')
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.withSchema('public').dropTableIfExists('integrator');
}

