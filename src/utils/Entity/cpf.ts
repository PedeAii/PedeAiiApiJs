export class Cpf {
    constructor(private readonly cpf: string) {
        this.cpf = this.cpf.replace(/[^\d]+/g, '');
    }

    public getCpf(): string {
        return this.cpf
    }

    public cpfIsValid() {
        // Verifica se o CPF tem 11 dígitos
        if (this.cpf.length !== 11) return false;

        // Verifica se todos os dígitos são iguais (como 111.111.111-11)
        if (/^(\d)\1{10}$/.test(this.cpf)) return false;

        // Calcula o primeiro dígito verificador
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(this.cpf.charAt(i)) * (10 - i);
        }
        let firstVerifierDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

        // Verifica se o primeiro dígito verificador é válido
        if (firstVerifierDigit !== parseInt(this.cpf.charAt(9))) return false;

        // Calcula o segundo dígito verificador
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(this.cpf.charAt(i)) * (11 - i);
        }
        let secondVerifierDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

        // Verifica se o segundo dígito verificador é válido
        if (secondVerifierDigit !== parseInt(this.cpf.charAt(10))) return false;

        // CPF é válido
        return true;
    }
}
