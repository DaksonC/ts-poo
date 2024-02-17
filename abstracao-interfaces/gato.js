"use strict";
// Objetivo: entender abstração
// Abstração: é o ato de abstrair, ou seja, isolar um objeto do seu contexto para que possa ser manipulado de forma independente. Dessa forma, a abstração permite que um objeto seja manipulado sem que seja necessário conhecer os detalhes de sua implementação.
// Documentando a classe Gato
/**
 * Classe Gato
 *
 * Representa um gato
 *
 * @property {string} nome Nome do gato
 * @property {number} idade Idade do gato
 * @property {string} cor Cor do gato
 *
 * @method falar() Faz o gato miar
 */
// Definindo a classe abstrata Gato
class Gato {
    constructor(nome, idade, cor) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }
    miar() {
        console.log(`${this.nome} faz miau!`);
    }
}
// Definindo a classe que extende a classe abstrata Gato
class GatoSiames extends Gato {
    constructor(nome, idade, cor) {
        super(nome, idade, cor);
        this.nomeDoDono = 'Desconhecido';
    }
}
// Criando uma instância da classe GatoSiames
const gato = new GatoSiames('Mingau', 3, 'branco');
console.log(gato);
