export class Email {
    constructor(public readonly email: string|null) {}

    /**
     * @description Valida se o email está no formato correto:
     * 
     * - Começa com caracteres alfanuméricos, pontos, sublinhados, percentuais, mais ou hífens.
     * - Contém o símbolo `@`.
     * - Segue com um domínio (alfanumérico, ponto ou hífen).
     * - Termina com um sufixo de domínio (duas ou mais letras).
     */
    private emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    public isValidEmail(): boolean {
        if (!this.email) return false;
        return this.emailRegex.test(this.email);
    }
}
