import { InterfaceServico } from "./InterfaceServico"

export class Servico implements InterfaceServico {
    constructor(private nome: string, private valorBase: number) { }

    obterNome(): string {
        return this.nome
    }

    obterValor(): number {
        return this.valorBase
    }
}