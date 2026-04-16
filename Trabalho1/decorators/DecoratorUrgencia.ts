import { DecoratorServico } from "./decoratorServico"

export class DecoradorUrgencia extends DecoratorServico {
  obterValor(): number {
    return this.servico.obterValor() + 50
  }

  obterNome(): string {
    return this.servico.obterNome() + " + Urgência"
  }
}