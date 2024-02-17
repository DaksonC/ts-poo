"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getRenda() {
        return this.renda;
    }
    setRenda(renda) {
        this.renda = renda;
    }
}
exports.default = Cliente;
