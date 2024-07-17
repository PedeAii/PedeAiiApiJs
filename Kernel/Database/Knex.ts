import 'dotenv/config';
import knex, { Knex } from 'knex';
import config from '../../knexfile';

export class Database {
  private static instance: Knex;

    private constructor() {}

  public  static getInstance(): Knex {
    if (!Database.instance) {
      Database.instance = knex(config);
    }
    return Database.instance;
  }
    
    public static getTable(tableName: string) {
        return Database.getInstance().table(tableName);
    }
}

