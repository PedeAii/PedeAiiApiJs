export class UserAuthDto {
    constructor(
        public readonly username: string|null,
        public readonly password: string|null,
    ) {}
}
