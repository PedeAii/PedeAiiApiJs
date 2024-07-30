import { IntegratorAuthDTO } from "../../../../../src/app/Integrator/Controller/dto/integrator-auth-dto";
import { IntegratorService } from "../../../../../src/app/Integrator/Domain/Service/integrator-service";

//jest.mock('src/app/Integrator/Infrastructure/Repository/integrator-repository');

// const IntegratorRepositoryMock = IntegratorRepository as jest.Mock<IntegratorRepository>

/* const integratorServiceFactory = () => {
    const integratorRepositoryMock = new IntegratorRepositoryMock() as jest.Mocked<IntegratorRepository>
    const integratorService = new IntegratorService();

    return {
        integratorService,
        integratorRepositoryMock
    }
} */

let integratorService: IntegratorService

describe('IntegratorService', () => {
    beforeEach(() => {
        integratorService = new IntegratorService();
    });

    it('shold throw if username or password were not passed', async () => {
        // const { integratorService } = integratorServiceFactory();

        const auth = new IntegratorAuthDTO(
            'Khallil',
            ''
        );

        const service = await integratorService.auth(auth);

        console.log(service);
    })
});