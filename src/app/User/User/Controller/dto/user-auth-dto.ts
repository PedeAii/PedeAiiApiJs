export class UserAuthDto {
    constructor(
        public readonly email: string|null,
        public readonly password: string|null,
    ) {}
}
