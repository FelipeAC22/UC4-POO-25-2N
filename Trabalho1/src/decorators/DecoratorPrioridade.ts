import { DecoratorServico } from "./DecoratorServico"

export class DecoratorProridade extends DecoratorServico {
    getNome(): string {
        return this.servico.getNome() + " + Prioridade"
    }

    getValor(): number {
        return this.servico.getValor() + 30;
    }
}