"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegratorService = void 0;
const created_at_1 = require("../../../../utils/Date/created-at");
const integrator_1 = require("../Entity/integrator");
const updated_at_1 = require("../../../../utils/Date/updated-at");
const integrator_id_1 = require("../Entity/integrator-id");
const integrator_repository_1 = require("../../Infrastructure/Repository/integrator-repository");
const Unauthorized_1 = require("../../../../../Kernel/Http/Unauthorized");
const jsonwebtoken_1 = require("jsonwebtoken");
const Cryptography_1 = require("../../../../utils/Cryptography/Cryptography");
class IntegratorService {
    integratorRepository;
    constructor() {
        this.integratorRepository = new integrator_repository_1.IntegratorRepository();
    }
    async auth(integratorAuthDTO) {
        const integrator = new integrator_1.Integrator(new integrator_id_1.IntegratorId(), integratorAuthDTO.username, integratorAuthDTO.password, new created_at_1.CreatedAt(), new updated_at_1.UpdatedAt());
        const currentIntegrator = await this.getByUsername(integrator.username);
        if (!currentIntegrator) {
            throw new Unauthorized_1.Unauthorized(['Invalid credentials']);
        }
        await this.compareAuthentication(integrator, currentIntegrator);
        return this.generateToken(currentIntegrator);
    }
    async getByUsername(username) {
        return await this.integratorRepository.getByUsername(username);
    }
    async compareAuthentication(integrator, currentIntegrator) {
        const passwordMatch = await Cryptography_1.Cryptography.comparePassword(integrator.password, currentIntegrator.password);
        if (!passwordMatch) {
            throw new Unauthorized_1.Unauthorized(['Invalid credentials']);
        }
        return true;
    }
    generateToken(integrator) {
        const token = (0, jsonwebtoken_1.sign)({}, process.env.APP_SECRET, {
            subject: integrator.id.getId?.toString(),
            expiresIn: "3h",
        });
        return token;
    }
}
exports.IntegratorService = IntegratorService;
//# sourceMappingURL=integrator-service.js.map