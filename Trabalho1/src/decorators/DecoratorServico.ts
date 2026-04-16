import { InterfaceServico } from "../models/InterfaceServico";

export abstract class DecoratorServico implements InterfaceServico {
  constructor(protected servico: InterfaceServico) { }

  getNome(): string {
    return this.servico.getNome()
  }

  getValor(): number {
    return this.servico.getValor()
  }
}