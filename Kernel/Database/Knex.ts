import 'dotenv/config';
import knex, { Knex } from 'knex';

const { 
  DB_CONNECTION,
  DB_HOST,
  DB_PORT,
  POSTGRES_USER,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
} = process.env;

export class Database {
  private static instance: Knex;

    private constructor() {}

  public static getInstance(): Knex {
    if (!Database.instance) {
      Database.instance = knex({
        client: DB_CONNECTION,
        connection: {
          host: DB_HOST,
          port: Number(DB_PORT),
          user: POSTGRES_USER,
          password: POSTGRES_PASSWORD,
          database: POSTGRES_DB,
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: "knex_migrations",
          directory: "./Kernel/Database/migrations"
        }
      });
    }
    return Database.instance;
  }
}

