import type { Knex } from "knex";
import 'dotenv/config';

const {
  DB_CONNECTION,
  DB_HOST,
  DB_PORT,
  POSTGRES_USER,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  DB_CONNECTION_TEST,
  DB_HOST_TEST,
  DB_PORT_TEST,
  POSTGRES_USER_TEST,
  POSTGRES_DB_TEST,
  POSTGRES_PASSWORD_TEST,
  DB_CONNECTION_LOCAL,
  DB_HOST_LOCAL,
  DB_PORT_LOCAL,
  POSTGRES_USER_LOCAL,
  POSTGRES_DB_LOCAL,
  POSTGRES_PASSWORD_LOCAL
} = process.env;

type Config = { [key: string]: Knex.Config };

const config: Config = {
  development: {
    client: DB_CONNECTION_LOCAL,
    connection: {
      host: DB_HOST_LOCAL,
      port: Number(DB_PORT_LOCAL),
      user: POSTGRES_USER_LOCAL,
      password: POSTGRES_PASSWORD_LOCAL,
      database: POSTGRES_DB_LOCAL,
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
  },
  test: {
    client: DB_CONNECTION_TEST,
    connection: {
      host: DB_HOST_TEST,
      port: Number(DB_PORT_TEST),
      user: POSTGRES_USER_TEST,
      password: POSTGRES_PASSWORD_TEST,
      database: POSTGRES_DB_TEST
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

export default config;
