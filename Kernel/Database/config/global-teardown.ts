import knex from 'knex';

const teardownTestDB = async (): Promise<void> => {
    // Conecta ao servidor do banco de dados principal (por exemplo, postgres para PostgreSQL)
    const masterDb = knex({
        client: 'pg',
        connection: {
            host: 'localhost', // ou o host do seu servidor de banco de dados
            user: 'pedeaii',
            password: '123456',
            database: 'postgres' // Banco de dados padrão do PostgreSQL
        }
    });

    // Remove o banco de dados de testes
    await masterDb.raw('DROP DATABASE IF EXISTS test');
    await masterDb.destroy();
};

export default teardownTestDB;