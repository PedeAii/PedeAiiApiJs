export class Identifier {

    private id: string|null;

    constructor(id: string|null) {
        this.id = id;
    }

    public get getId() : string|null {
        return this.id;
    }
}
