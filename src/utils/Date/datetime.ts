import moment from "moment";

export class Datetime {
    private date: moment.Moment;

    constructor(datetime?: string) {
        this.date = datetime ? moment(datetime) : moment()
    }

    public toBrazilian(): string {
        return this.date.format('DD-MM-YYYY HH:mm:ss');
    }

    public toDatabase(): string {
        return this.date.format('YYYY-MM-DD HH:mm:ss')
    }

    public jsonSerialize(): Object {
        return {
            'br': this.toBrazilian(),
            'us': this.toDatabase()
        }
    }
}
