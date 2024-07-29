import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.withSchema('public').createTable('integrator', (table) => {
        table.increments('id').unique({ indexName: 'id'});
        table.string('username');
        table.string('password');
        table.string('status')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.withSchema('public').dropTableIfExists('integrator');
}

