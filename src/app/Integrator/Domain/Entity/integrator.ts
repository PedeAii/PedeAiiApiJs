import { CreatedAt } from "src/utils/Date/created-at";
import { UpdatedAt } from "src/utils/Date/updated-at";
import { IntegratorId } from "./integrator-id";
import { empty } from "src/utils/Functions/empty";

export class Integrator {
    constructor(
        public readonly id: IntegratorId,
        public readonly username: string|null,
        public readonly password: string|null,
        public readonly createdAt: CreatedAt,
        public readonly updatedAt: UpdatedAt
    ) {}

    public integratorVelidate() {
        let errors: Error[] = [];
        
        if (empty(this.username)) {
            errors.push(Error('Username invalid or not informed'));
        }

        if (empty(this.password)) {
            errors.push(Error('Password invalid or not informed'));
        }

        if (errors.length > 0) {
            throw new Error(errors[errors.length - 1].message);
        }

        return true;
    }
}
