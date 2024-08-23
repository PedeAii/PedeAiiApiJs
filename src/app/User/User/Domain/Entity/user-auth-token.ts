import { Datetime } from "../../../../../utils/Date/datetime";

export class UserAuthToken {
    public expirationDate: Datetime

    constructor(
        public readonly token: string,
    ) {
        this.expirationDate = new Datetime().addHours(3);
    }

    public jsonSerialize(): Object {
        return {
            token: this.token,
            expirationDate: this.expirationDate.toDatabase()
        }
    }
}
