import { CreatedAt } from "../../../../utils/Date/created-at";
import { IntegratorAuthDTO } from "../../Controller/dto/integrator-auth-dto";
import { Integrator } from "../Entity/integrator";
import { UpdatedAt } from "../../../../utils/Date/updated-at";
import { IntegratorId } from "../Entity/integrator-id";
import { IntegratorRepository } from "../../Infrastructure/Repository/integrator-repository";
import { Unauthorized } from "../../../../../Kernel/Http/Unauthorized";
import { sign } from "jsonwebtoken";
import { Cryptography } from "../../../../utils/Cryptography/Cryptography";


export class IntegratorService {

    private integratorRepository: IntegratorRepository

    constructor() {
        this.integratorRepository = new IntegratorRepository()
    }

    async auth(integratorAuthDTO: IntegratorAuthDTO): Promise<string> {
        const integrator = new Integrator(
            new IntegratorId(),
            integratorAuthDTO.username as string,
            integratorAuthDTO.password as string,
            new CreatedAt(),
            new UpdatedAt()
        );
        
        const currentIntegrator = await this.getByUsername(integrator.username);
        if (!currentIntegrator) {
            throw new Unauthorized(['Invalid credentials']);
        }

        await this.compareAuthentication(integrator, currentIntegrator);

        return this.generateToken(currentIntegrator);
    }

    private async getByUsername(username: string) {
        return await this.integratorRepository.getByUsername(username);
    }

    private async compareAuthentication(integrator: Integrator, currentIntegrator: Integrator): Promise<boolean> {
        const passwordMatch = await Cryptography.comparePassword(integrator.password, currentIntegrator.password);

        if (!passwordMatch) {
            throw new Unauthorized(['Invalid credentials']);
        }

        return true;
    }

    private generateToken(integrator: Integrator): string {
        const token = sign({}, process.env.APP_SECRET as string, {
            subject: integrator.id.getId?.toString(),
            expiresIn: "3h",
        });

        return token;
    }
}
