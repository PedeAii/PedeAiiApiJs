import { CreatedAt } from "../../../../utils/Date/created-at";
import { UpdatedAt } from "../../../../utils/Date/updated-at";
import { IntegratorId } from "./integrator-id";
import { empty } from "../../../../utils/Functions/empty";
import { UnprocessableEntity } from "../../../../../Kernel/Http/UnprocessableEntity";

export class Integrator {
    constructor(
        public readonly id: IntegratorId,
        public readonly username: string,
        public readonly password: string,
        public readonly createdAt: CreatedAt,
        public readonly updatedAt: UpdatedAt
    ) {
        this.integratorVelidate();
    }

    public integratorVelidate() {
        let errors = [];
        
        if (empty(this.username)) {
            errors.push('Username invalid or not informed');
        }

        if (empty(this.password)) {
            errors.push('Password invalid or not informed');
        }

        if (errors.length > 0) {
            throw new UnprocessableEntity(errors);
        }

        return true;
    }
}
