import { ServicoBase } from "./ServicoBase";

export class ServicoConcreto extends ServicoBase {
  constructor(nome: string, valor: number) {
    super(nome, valor)
  }
}