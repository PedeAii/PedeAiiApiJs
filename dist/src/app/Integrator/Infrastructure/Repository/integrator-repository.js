"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegratorRepository = void 0;
const integrator_1 = require("../../Domain/Entity/integrator");
const integrator_id_1 = require("../../Domain/Entity/integrator-id");
const Knex_1 = require("../../../../../Kernel/Database/Knex");
const NotFound_1 = require("../../../../../Kernel/Http/NotFound");
const created_at_1 = require("../../../../utils/Date/created-at");
const updated_at_1 = require("../../../../utils/Date/updated-at");
class IntegratorRepository extends Knex_1.Database {
    constructor() {
        super();
    }
    tableName = 'integrator';
    async getByUsername(username) {
        const result = await this.getInstance()
            .select('*')
            .from(this.tableName)
            .where({ username })
            .first();
        if (!result) {
            throw new NotFound_1.NotFound(['Integrator not found']);
        }
        return this.getIntegrator(result);
    }
    getIntegrator(result) {
        return new integrator_1.Integrator(new integrator_id_1.IntegratorId(result.id), result.username, result.password, new created_at_1.CreatedAt(result.created_at), new updated_at_1.UpdatedAt(result.updated_at));
    }
}
exports.IntegratorRepository = IntegratorRepository;
//# sourceMappingURL=integrator-repository.js.map