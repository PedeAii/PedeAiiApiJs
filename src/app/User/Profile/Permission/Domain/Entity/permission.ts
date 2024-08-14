import { PermissionId } from "./permission-id";

export class Permission {
    constructor(
        public readonly id: PermissionId,
        public readonly name: string | null,
        public readonly slug: string | null,
        public readonly description: string | null
    ) {}

    public jsonSerialize(): Object {
        return {
            'id': this.id.getIdEncoded,
            'name': this.name,
            'slug': this.slug,
            'description': this.description
        }
    }
}
