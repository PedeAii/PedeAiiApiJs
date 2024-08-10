import { Cryptography } from "../Cryptography/Cryptography";

export class Identifier {

    private id: string|null;

    constructor(id: string|null) {
        this.id = id;
    }

    public get getId() : string|null {
        return this.id;
    }

    public get getIdEncoded() : string|null {
        if (!this.id) return null;

        return Cryptography.jwtEncoded(this.id);
    }
}
