import { Lanche } from "./Lanche";

export abstract class Adicional implements Lanche {
    constructor(protected Lanche: Lanche) { }

    getDescricao(): string {
        return this.Lanche.getDescricao()
    }
    getPreco(): number {
        return this.Lanche.getPreco()
    }
}