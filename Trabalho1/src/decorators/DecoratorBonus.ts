import { DecoratorServico } from "./DecoratorServico";

export class DecoratorBonus extends DecoratorServico {
    getNome(): string {
        return this.servico.getNome() + " + Bônus"
    }

    getValor(): number {
        return this.servico.getValor() + 100
    }
}