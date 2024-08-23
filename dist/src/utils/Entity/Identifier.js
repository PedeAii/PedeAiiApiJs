"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identifier = void 0;
const Cryptography_1 = require("../Cryptography/Cryptography");
class Identifier {
    id;
    constructor(id) {
        this.id = id;
    }
    get getId() {
        return this.id ?? null;
    }
    get getIdEncoded() {
        if (!this.id)
            return null;
        return Cryptography_1.Cryptography.jwtEncoded(this.id);
    }
}
exports.Identifier = Identifier;
//# sourceMappingURL=Identifier.js.map