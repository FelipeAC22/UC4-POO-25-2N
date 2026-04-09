import { Animal } from "./Animal";

export class Gato extends Animal {
    fazerBarulho(): void {
        console.log(`O gato ${this.nome} está miando!`)
    }
}