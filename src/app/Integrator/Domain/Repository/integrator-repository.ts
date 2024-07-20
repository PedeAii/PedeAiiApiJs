import { Integrator } from "../Entity/integrator";

export interface IntegratorRepository {
    getByUsername(username: string|null) : Promise<Integrator> 
}