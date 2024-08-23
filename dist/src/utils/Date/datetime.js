"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datetime = void 0;
class Datetime {
    date;
    constructor(datetime) {
        this.date = datetime ? new Date(datetime) : new Date();
    }
    addHours(hours) {
        this.date.setHours(this.date.getHours() + hours);
        return this;
    }
    toBrazilian() {
        return this.formatDate('DD-MM-YYYY hh:mm:ss');
    }
    toDatabase() {
        return this.formatDate('YYYY-MM-DD hh:mm:ss');
    }
    formatDate(format) {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const parts = new Intl.DateTimeFormat('en-US', options)
            .formatToParts(this.date)
            .reduce((acc, part) => {
            acc[part.type] = part.value;
            return acc;
        }, {});
        return format
            .replace('DD', parts.day)
            .replace('MM', parts.month)
            .replace('YYYY', parts.year)
            .replace('hh', parts.hour)
            .replace('mm', parts.minute)
            .replace('ss', parts.second);
    }
    jsonSerialize() {
        return {
            'br': this.toBrazilian(),
            'us': this.toDatabase()
        };
    }
}
exports.Datetime = Datetime;
//# sourceMappingURL=datetime.js.map