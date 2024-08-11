import { UnprocessableEntity } from "../../../../../Kernel/Http/UnprocessableEntity";
import { IntegratorAuthDTO } from "../../../../../src/app/Integrator/Controller/dto/integrator-auth-dto";
import { IntegratorService } from "../../../../../src/app/Integrator/Domain/Service/integrator-service";

const integratorService: IntegratorService;

describe('IntegratorService', () => {
    beforeEach(() => {
        integratorService = new IntegratorService();
    });

    it('shold throw if username or password were not passed', async () => {
        const auth = new IntegratorAuthDTO(
            'Khallil',
            ''
        );

        await expect(async () => {
            await integratorService.auth(auth);
        }).rejects.toBeInstanceOf(UnprocessableEntity);
    })
});
