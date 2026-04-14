import { Adicional } from "./Adicional";

export class AdicionalBacon extends Adicional {
    getDescricao(): string {
        return super.getDescricao() + ' + Bacon'
    }
    getPreco(): number {
        return super.getPreco() + 7
    }
}