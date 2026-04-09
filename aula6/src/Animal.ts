export class Animal {
    public nome: string
    constructor(nome: string) {
        this.nome = nome
    }
    protected fazerBarulho(): void { 
        console.log(`O ${this.nome} está fazendo barulho!`)
    }
}