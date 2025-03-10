"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empty = empty;
function empty(value) {
    if (value == null) { // Verify null and undefined
        return true;
    }
    if (typeof value === 'string' && value.trim() === '') {
        return true;
    }
    if (Array.isArray(value) && value.length === 0) {
        return true;
    }
    if (typeof value === 'object' && Object.keys(value).length === 0) {
        return true;
    }
    return false;
}
//# sourceMappingURL=empty.js.map