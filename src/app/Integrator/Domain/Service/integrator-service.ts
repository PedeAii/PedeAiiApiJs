import { CreatedAt } from "src/utils/Date/created-at";
import { IntegratorAuthDTO } from "../../Controller/dto/integrator-dto";
import { Integrator } from "../Entity/integrator";
import { UpdatedAt } from "src/utils/Date/updated-at";
import { IntegratorId } from "../Entity/integrator-id";

export class IntegratorService {

    async auth(integratorAuthDTO: IntegratorAuthDTO) {
        const integrator = new Integrator(
            new IntegratorId(null),
            integratorAuthDTO.username,
            integratorAuthDTO.password,
            new CreatedAt(),
            new UpdatedAt()
        );

        integrator.integratorVelidate();

    }

    async get
}