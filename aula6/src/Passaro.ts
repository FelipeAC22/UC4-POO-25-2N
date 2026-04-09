import { Animal } from "./Animal";

export class Passaro extends Animal {
    fazerBarulho(): void {
        console.log(`O pássaro ${this.nome} está cantando!`)
    }
}