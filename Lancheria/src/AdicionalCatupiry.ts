import { Adicional } from "./Adicional";

export class AdicionalCatupiry extends Adicional {
    getDescricao(): string {
        return super.getDescricao() + ' + Catupiry'
    }
    getPreco(): number {
        return super.getPreco() + 5
    }
}