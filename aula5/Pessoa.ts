export class Pessoa {

    protected nome: string

    constructor(nome: string) {
        this.nome = nome
    }
    apresentar(): void {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}