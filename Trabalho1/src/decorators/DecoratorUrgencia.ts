import { DecoratorServico } from "./DecoratorServico";

export class DecoratorUrgencia extends DecoratorServico {
  getNome(): string {
    return this.servico.getNome() + " + Urgência"
  }

  getValor(): number {
    return this.servico.getValor() + 50
  }
}