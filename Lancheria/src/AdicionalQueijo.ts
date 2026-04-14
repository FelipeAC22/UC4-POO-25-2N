import { Adicional } from "./Adicional";

export class AdicionalQueijo extends Adicional {
    getDescricao(): string {
        return super.getDescricao() + ' + Queijo'
    }
    getPreco(): number {
        return super.getPreco() + 4
    }
}