import { Database } from "Kernel/Database/Knex";
import { Integrator } from "../../Domain/Entity/integrator";
import { IntegratorRepository as IintegratorRepository } from "../../Domain/Repository/integrator-repository";


export class IntegratorRepository implements IintegratorRepository {
    protected tableName = 'integrator';

    getByUsername(username: string | null): Promise<Integrator> {
        return Database.getInstance().select('*').from(this.tableName).where({ username }).first();
    }
}