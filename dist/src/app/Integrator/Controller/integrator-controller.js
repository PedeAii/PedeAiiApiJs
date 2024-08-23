"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegratorController = void 0;
const integrator_service_1 = require("../Domain/Service/integrator-service");
const integrator_auth_dto_1 = require("./dto/integrator-auth-dto");
const Success_1 = require("../../../../Kernel/Http/Success");
class IntegratorController {
    integratorService;
    constructor() {
        this.integratorService = new integrator_service_1.IntegratorService();
    }
    authAction = async (req, res) => {
        const { username, password } = req.body;
        const output = await this.integratorService.auth(new integrator_auth_dto_1.IntegratorAuthDTO(username, password));
        const success = new Success_1.Success({ 'token': output });
        return res.json(success.render());
    };
}
exports.IntegratorController = IntegratorController;
//# sourceMappingURL=integrator-controller.js.map