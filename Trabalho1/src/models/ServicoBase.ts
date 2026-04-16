import { Servico } from "./Servico"

export abstract class ServicoBase implements Servico {
    constructor(protected nome: string, protected valorBase: number) { }

    getNome(): string {
        return this.nome
    }

    getValor(): number {
        return this.valorBase
    }
}