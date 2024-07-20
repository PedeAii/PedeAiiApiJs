import { CreatedAt } from "src/utils/Date/created-at";
import { IntegratorAuthDTO } from "../../Controller/dto/integrator-dto";
import { Integrator } from "../Entity/integrator";
import { UpdatedAt } from "src/utils/Date/updated-at";
import { IntegratorId } from "../Entity/integrator-id";
import { IntegratorRepository } from "../Repository/integrator-repository";

export class IntegratorService {

    private integratorRepository: IntegratorRepository

    constructor() {}

    async auth(integratorAuthDTO: IntegratorAuthDTO) {
        const integrator = new Integrator(
            new IntegratorId(null),
            integratorAuthDTO.username,
            integratorAuthDTO.password,
            new CreatedAt(),
            new UpdatedAt()
        );

        integrator.integratorVelidate();

        const currentIntegrator: Integrator = await this.getByUsername(integrator.username);

    }

    private async getByUsername(username: string|null) {
        return await this.integratorRepository.getByUsername(username);
    }
}