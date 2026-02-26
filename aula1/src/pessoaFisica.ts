import { pessoaInterface } from "./pessoaInterface";

class pessoa implements pessoaInterface {
    public _id: number;
    public _nome: string;
    public _idade: number;
    private _cpf: string
    constructor(id: number, nome: string, idade: number, cpf: string) {
        this._id = id
        this._nome = nome
        this._idade = idade
        this._cpf = cpf
    }
    get get_id(): number {
        return this._id
    }
    get get_nome(): string {
        return this._nome
    }
    get get_cpf(): string {
        return this._cpf
    }
    set set_id(id: number) {
        this._id = id
    }
    set set_nome(nome: string) {
        this._nome = nome
    }
    set set_cpf(cpf: string) {
        this._cpf = cpf
    }
}

let pessoa1: pessoa = new pessoa(1, 'Felipe', 18, '999.999.999-99')
