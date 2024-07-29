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
  private instance: Knex;

    public constructor() {}

  public getInstance(): Knex {
    if (!this.instance) {
      this.instance = knex({
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

    return this.instance;
  }
}

