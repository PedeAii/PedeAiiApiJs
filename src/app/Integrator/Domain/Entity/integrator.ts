import { IntegratorId } from "./integrator-id";
import { CreatedAt } from "../../../../utils/Date/created-at";
import { UnprocessableEntity } from "../../../../../Kernel/Http/UnprocessableEntity";
import { UpdatedAt } from "../../../../utils/Date/updated-at";
import { empty } from "../../../../utils/Functions/empty";

export class Integrator {
    constructor(
        public readonly id: IntegratorId,
        public readonly username: string,
        public readonly password: string,
        public readonly createdAt: CreatedAt,
        public readonly updatedAt: UpdatedAt
    ) {
        this.integratorValidate();
    }

    private integratorValidate() {
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
