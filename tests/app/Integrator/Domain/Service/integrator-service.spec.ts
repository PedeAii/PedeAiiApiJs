import { IntegratorService } from "../../../../../src/app/Integrator/Domain/Service/integrator-service";
import { IntegratorRepository } from "../../../../../src/app/Integrator/Infrastructure/Repository/integrator-repository";

//jest.mock('src/app/Integrator/Infrastructure/Repository/integrator-repository');

const IntegratorRepositoryMock = IntegratorRepository as jest.Mock<IntegratorRepository>

const integratorServiceFactory = () => {
    const integratorRepositoryMock = new IntegratorRepositoryMock() as jest.Mocked<IntegratorRepository>
    const integratorService = new IntegratorService();

    return {
        integratorService,
        integratorRepositoryMock
    }
}

describe('IntegratorService', () => {
    it('shold throw if username or password were not passed', async () => {
        const { integratorService } = integratorServiceFactory();

    })
});