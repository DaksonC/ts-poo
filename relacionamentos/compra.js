"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Compra {
    constructor(cliente, funcionario, carro, valor) {
        this.cliente = cliente;
        this.funcionario = funcionario;
        this.carro = carro;
        this.valor = valor;
        this.valorComDesconto = 0;
        this.carro.setValor(this.desconto(this.carro.getValor()));
        this.funcionario.setComissao(this.addComissao(this.valor));
    }
    desconto(valor) {
        if (this.carro.getAno() < 2000) {
            this.valorComDesconto = this.carro.getValor() * 0.90;
            this.carro.setValor(this.valorComDesconto);
        }
        else {
            this.carro.setValor(valor);
        }
        ;
        if (this.cliente.getRenda() < 5000) {
            this.valorComDesconto = this.carro.getValor() * 0.90;
            return this.carro.setValor(this.valorComDesconto);
        }
        else {
            return this.carro.setValor(this.carro.getValor());
        }
        ;
    }
    addComissao(valor) {
        return this.funcionario.setComissao(valor * 0.02);
    }
    detalhesCompra() {
        return `Cliente: ${this.cliente.getNome()},\n 
    Funcionário: ${this.funcionario.getNome()},\n
    Carro: ${this.carro.getModelo()},\n
    Valor: ${this.carro.getValor()},\n
    Comissão: ${this.funcionario.getComissao()}`;
    }
}
exports.default = Compra;
