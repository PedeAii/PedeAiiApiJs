import moment from "moment";

export class Datetime {
    private date: moment.Moment;

    constructor(datetime: string = this.date.format()) {
        this.date = moment(datetime)
    }

    public toBrazilian(): string {
        return this.date.format('DD-MM-YYYY h:mm:ss');
    }

    public toDatabase(): string {
        return this.date.format('YYYY-MM-DD h:mm:ss')
    }

    public jsonSerialize(): Object {
        return {
            'br': this.toBrazilian(),
            'us': this.toDatabase()
        }
    }
}