import { Database } from "../../../../../Kernel/Database/Knex";
import { Integrator } from "../../Domain/Entity/integrator";
import { IntegratorRepository as IintegratorRepository } from "../../Domain/Repository/integrator-repository";
import { IntegratorId } from "../../Domain/Entity/integrator-id";
import { CreatedAt } from "../../../../utils/Date/created-at";
import { UpdatedAt } from "../../../../utils/Date/updated-at";


export class IntegratorRepository extends Database implements IintegratorRepository {
    constructor() {
        super()
    }

    protected tableName = 'integrator';

    async getByUsername(username: string): Promise<Integrator | undefined> {
        const result = await this.getInstance()
            .select('*')
            .from(this.tableName)
            .where({ username })
            .first();

        if (!result) {
            return undefined;
        }

        return this.getIntegrator(result);
    }

    getIntegrator(result: any): Integrator {
        return new Integrator(
            new IntegratorId(result.id),
            result.username,
            result.password,
            new CreatedAt(result.created_at),
            new UpdatedAt(result.updated_at)
        );
    }
}
