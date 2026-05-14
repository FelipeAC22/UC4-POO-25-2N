import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa {
    Estudar(): void {
        console.log(`${this.nome} está estudando!`)
    }
}