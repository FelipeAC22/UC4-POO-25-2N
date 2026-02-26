import { pessoaInterface } from "./pessoaInterface";

class pessoa implements pessoaInterface {
    public _id: number;
    public _nome: string;
    private _cnpj: string
    constructor(id: number, nome: string, cpnj: string) {
        this._id = id
        this._nome = nome
        this._cnpj = cpnj
    }
    get get_id(): number {
        return this._id
    }
    get get_nome(): string {
        return this._nome
    }
    get get_cnpj(): string {
        return this._cnpj
    }
    set set_id(id: number) {
        this._id = id
    }
    set set_nome(nome: string) {
        this._nome = nome
    }
    set set_cnpj(cnpj: string) {
        this._cnpj = cnpj
    }
}

let pessoa2: pessoa = new pessoa(1, 'Felipe', '999.999.999-99')

