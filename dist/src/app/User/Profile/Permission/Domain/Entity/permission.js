"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
class Permission {
    id;
    name;
    slug;
    description;
    constructor(id, name, slug, description) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.description = description;
    }
    jsonSerialize() {
        return {
            'id': this.id.getIdEncoded,
            'name': this.name,
            'slug': this.slug,
            'description': this.description
        };
    }
}
exports.Permission = Permission;
//# sourceMappingURL=permission.js.map