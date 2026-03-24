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
var espadaElfica = /** @class */ (function () {
    function espadaElfica() {
        this.durabilidade = 100;
    }
    espadaElfica.prototype.usar = function () {
        this.durabilidade -= 10;
    };
    espadaElfica.prototype.reparar = function () {
        this.durabilidade = 100;
    };
    espadaElfica.prototype.mostrarDurabilidade = function () {
        return this.durabilidade;
    };
    return espadaElfica;
}());
var excalibur = new espadaElfica;
excalibur.usar();
excalibur.usar();
excalibur.usar();
excalibur.usar();
console.log("durabilidade: ".concat(excalibur.mostrarDurabilidade()));
excalibur.reparar();
console.log("durabilidade: ".concat(excalibur.mostrarDurabilidade()));
