import { DecoratorServico } from "./DecoratorServico";

export class DecoratorUrgencia extends DecoratorServico {
  getValor(): number {
    return this.servico.getValor() + 50
  }

  getNome(): string {
    return this.servico.getNome() + " + Urgência"
  }
}