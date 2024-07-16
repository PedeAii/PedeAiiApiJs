import type { Knex } from "knex";
import 'dotenv/config';

const { 
  DB_CONNECTION,
  DB_HOST,
  DB_PORT,
  POSTGRES_USER,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
} = process.env;

const config: { [key: string]: Knex.Config } = {
  development: {
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
  },

  staging: {
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
  },

  production: {
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
  }
};

export { config };
