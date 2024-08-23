"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    email;
    constructor(email) {
        this.email = email;
    }
    /**
     * @description Valida se o email está no formato correto:
     *
     * - Começa com caracteres alfanuméricos, pontos, sublinhados, percentuais, mais ou hífens.
     * - Contém o símbolo `@`.
     * - Segue com um domínio (alfanumérico, ponto ou hífen).
     * - Termina com um sufixo de domínio (duas ou mais letras).
     */
    emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    isValidEmail() {
        if (!this.email)
            return false;
        return this.emailRegex.test(this.email);
    }
}
exports.Email = Email;
//# sourceMappingURL=email.js.map