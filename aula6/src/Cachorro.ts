import { Animal } from "./Animal";

export class Cachorro extends Animal {
    fazerBarulho(): void {
        console.log(`O cachorro ${this.nome} está latindo!`)
    }
}