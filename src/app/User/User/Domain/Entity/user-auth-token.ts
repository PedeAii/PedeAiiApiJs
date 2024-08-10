import moment, { Moment } from "moment";

export class UserAuthToken {
    public expirationDate: Moment

    constructor(
        public readonly token: string,
    ) {
        this.expirationDate = moment().add(3, 'hours')
    }

    public jsonSerialize(): Object {
        return {
            'token': this.token,
            'expirationDate':  this.expirationDate.format('YYYY-MM-DD HH:mm:ss')
        }
    }
}
