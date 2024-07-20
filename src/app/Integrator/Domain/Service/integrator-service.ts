import { CreatedAt } from "src/utils/Date/created-at";
import { IntegratorAuthDTO } from "../../Controller/dto/integrator-dto";
import { Integrator } from "../Entity/integrator";
import { UpdatedAt } from "src/utils/Date/updated-at";
import { IntegratorId } from "../Entity/integrator-id";
import { IntegratorRepository } from "../../Infrastructure/Repository/integrator-repository";
import { UnprocessableEntity } from "Kernel/Http/UnprocessableEntity";
import { empty } from "src/utils/Functions/empty";

export class IntegratorService {

    private integratorRepository: IntegratorRepository

    constructor() {
        this.integratorRepository = new IntegratorRepository()
    }

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
        if (empty(currentIntegrator)) {
            throw new UnprocessableEntity(['Integrator not found']);
        }

        console.log(currentIntegrator);
    }

    private async getByUsername(username: string|null) {
        return await this.integratorRepository.getByUsername(username);
    }
}