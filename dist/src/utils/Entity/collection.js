"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
class Collection {
    items;
    constructor(items = []) {
        this.items = items;
    }
    // Método para acessar os itens
    getAll() {
        return this.items;
    }
    jsonSerialize() {
        return this.items.map(item => item.jsonSerialize?.());
    }
}
exports.Collection = Collection;
//# sourceMappingURL=collection.js.map