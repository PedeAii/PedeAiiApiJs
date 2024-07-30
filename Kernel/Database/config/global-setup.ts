import knex from 'knex';
import config from '../../../knexfile';

const db = knex(config.test);

beforeAll(async () => {
    // Limpa o banco de dados de teste
    await db.migrate.rollback();
    await db.migrate.latest();
});
  
afterAll(async () => {
    // Fecha a conexão com o banco de dados
    await db.destroy();
});
