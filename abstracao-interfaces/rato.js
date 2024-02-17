"use strict";
// Objetivo: definir uma interface
// Interfaces: são contratos que definem as propriedades e métodos que uma classe deve implementar. Dessa forma, uma interface define um contrato que deve ser seguido pelas classes que a implementam. As interfaces são muito utilizadas para definir contratos em TypeScript.
;
// Documentando a classe RatoCinza
/**
 * Classe RatoCinza
 *
 * Representa um rato cinza
 *
 * @property {string} nome Nome do rato
 * @property {number} peso Peso do rato
 * @property {number} idade Idade do rato
 * @property {string} cor Cor do rato
 *
 * @method dormir() Faz o rato dormir
 * @method correr() Faz o rato correr
 * @method comer() Faz o rato comer
 * @method brincar() Faz o rato brincar
 */
class RatoCinza {
    constructor(nome, peso, idade, cor) {
        this.nome = nome;
        this.peso = peso;
        this.idade = idade;
        this.cor = cor;
    }
    dormir() {
        console.log(`${this.nome} está dormindo`);
    }
    correr() {
        console.log(`${this.nome} está correndo`);
    }
    comer() {
        console.log(`${this.nome} está comendo`);
    }
    brincar() {
        console.log(`${this.nome} está brincando`);
    }
}
// Criando uma instância da classe RatoCinza
const rato = new RatoCinza('Ratão', 0.5, 1, 'cinza');
rato.dormir();
rato.correr();
rato.comer();
rato.brincar();
console.log(rato);
