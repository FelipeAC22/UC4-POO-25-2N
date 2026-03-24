/*
class hobbit {
    private nome: string
    private idade: number
    constructor(nome: string, idade: number) {
        this.nome = nome,
            this.idade = idade
    }
    fazerAniversario() {
        this.idade++
    }
    mostrarIdade() {
        return this.idade
    }
}

let frodoBolseiro = new hobbit("Frodo", 70)

frodoBolseiro.fazerAniversario()
console.log(`idade do hobbit: ${frodoBolseiro.mostrarIdade()}`);
*/

class espadaElfica {
    private durabilidade: number
    constructor() {
        this.durabilidade = 100
    }
    usar() {
        this.durabilidade -= 10
    }
    reparar() {
        this.durabilidade = 100
    }
    mostrarDurabilidade() {
        return this.durabilidade
    }

}

let excalibur = new espadaElfica

excalibur.usar()
excalibur.usar()
excalibur.usar()
excalibur.usar()
console.log(`durabilidade: ${excalibur.mostrarDurabilidade()}`)
excalibur.reparar()
console.log(`durabilidade: ${excalibur.mostrarDurabilidade()}`)
