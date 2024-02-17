"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome) {
        this.comissao = 0;
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getComissao() {
        return this.comissao;
    }
    setComissao(comissao) {
        return this.comissao = comissao;
    }
}
exports.default = Funcionario;
