export class Datetime {
    private date: Date;

    constructor(datetime?: string) {
        this.date = datetime ? new Date(datetime) : new Date();
    }

    public toBrazilian(): string {
        return this.date.format('DD-MM-YYYY HH:mm:ss');
    }

    public toDatabase(): string {
        return this.formatDate('YYYY-MM-DD hh:mm:ss');
    }

    private formatDate(format: string): string {
        const options: Intl.DateTimeFormatOptions = {
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
            }, {} as Record<string, string>);

        return format
            .replace('DD', parts.day)
            .replace('MM', parts.month)
            .replace('YYYY', parts.year)
            .replace('hh', parts.hour)
            .replace('mm', parts.minute)
            .replace('ss', parts.second);
    }

    public jsonSerialize(): Object {
        return {
            'br': this.toBrazilian(),
            'us': this.toDatabase()
        }
    }
}
