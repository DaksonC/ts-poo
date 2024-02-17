"use strict";
// Objetivo: entender o que são classes e objetos em TypeScript
// A classe é um modelo para criar objetos e define propriedades e métodos que os objetos terão e o objeto é uma instância da classe.
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoas {
}
// Instanciando a classe
const pessoa = new Pessoas();
// Atribuindo valores
pessoa.nome = 'Lucas';
pessoa.idade = 22;
// Acessando valores
console.log('******* Classe Pessoa sem construtor *******');
console.log('Nome:', pessoa.nome); // Lucas
console.log('Idade: ', pessoa.idade); // 22
// **************Diferença da classe usando construtor*******************
class Pessoas1 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
exports.default = Pessoas1;
// Instanciando a classe
const pessoa1 = new Pessoas1('Dakson', 40); // Agora é obrigatório passar os valores na instanciação
// Acessando valores
console.log('******** Classe Pessoa com construtor *********');
console.log('Nome:', pessoa1.nome);
console.log('Idade: ', pessoa1.idade);
