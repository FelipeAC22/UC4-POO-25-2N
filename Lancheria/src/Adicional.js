"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adicional = void 0;
var Adicional = /** @class */ (function () {
    function Adicional(Lanche) {
        this.Lanche = Lanche;
    }
    Adicional.prototype.getDescricao = function () {
        return this.Lanche.getDescricao();
    };
    Adicional.prototype.getPreco = function () {
        return this.Lanche.getPreco();
    };
    return Adicional;
}());
exports.Adicional = Adicional;
