import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa {
    ensinar(): void {
        console.log(`${this.nome} está ensinando!`)
    }
}