import { UnprocessableEntity } from "../../../../../../Kernel/Http/UnprocessableEntity";

export class UserStatus {
    public static readonly ACTIVE = 'ACTIVE';
    public static readonly INACTIVE = 'INACTIVE';

    constructor(private readonly status: string) {
        this.getStatus();
    }

    public getStatus(): string {
        switch (this.status) {
            case 'ACTIVE':
                return UserStatus.ACTIVE;
            case 'INACTIVE':
                return UserStatus.INACTIVE;
            default:
                throw new UnprocessableEntity([`Invalid UserStatus: ${this.status}`]);
        }
    }
}
