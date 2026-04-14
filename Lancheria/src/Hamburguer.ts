import { Lanche } from "./Lanche";

export class Hamburguer implements Lanche {
    getDescricao(): string {
        return "Hamburguer de carne de cavalo"
    }
    getPreco(): number {
        return 10
    }

}