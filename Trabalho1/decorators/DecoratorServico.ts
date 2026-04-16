import { InterfaceServico } from "../models/InterfaceServico";

export abstract class DecoratorServico implements InterfaceServico {
  constructor(protected servico: InterfaceServico) {}

  obterNome(): string {
    return this.servico.obterNome()
  }

  obterValor(): number {
    return this.servico.obterValor()
  }
}