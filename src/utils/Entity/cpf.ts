export class Cpf {
    constructor(private readonly cpf: string) {}

    public getCpf(): string {
        return this.cpf
    }

    public cpfIsValid() {
        // Remove caracteres não numéricos (pontos e hífens)
        const cpf = this.cpf.replace(/[^\d]+/g, '');

        // Verifica se o CPF tem 11 dígitos
        if (cpf.length !== 11) return false;

        // Verifica se todos os dígitos são iguais (como 111.111.111-11)
        if (/^(\d)\1{10}$/.test(cpf)) return false;

        // Calcula o primeiro dígito verificador
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let firstVerifierDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

        // Verifica se o primeiro dígito verificador é válido
        if (firstVerifierDigit !== parseInt(cpf.charAt(9))) return false;

        // Calcula o segundo dígito verificador
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }
        let secondVerifierDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

        // Verifica se o segundo dígito verificador é válido
        if (secondVerifierDigit !== parseInt(cpf.charAt(10))) return false;

        // CPF é válido
        return true;
    }
}
