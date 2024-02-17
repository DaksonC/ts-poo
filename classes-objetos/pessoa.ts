// Objetivo: entender o que são classes e objetos em TypeScript
// A classe é um modelo para criar objetos e define propriedades e métodos que os objetos terão e o objeto é uma instância da classe.

// Criando a documentação da classe

/**
 * Classe Pessoa
 * @param nome - nome da pessoa
 * @param idade - idade da pessoa
 */

class Pessoa {
  nome: string | undefined; // undefined é um tipo de dado que pode ser nulo
  idade: number | undefined; // undefined é um tipo de dado que pode ser nulo
}

// Instanciando a classe
const pessoa = new Pessoa();

// Atribuindo valores
pessoa.nome = 'Lucas';
pessoa.idade = 22;

// Acessando valores
console.log('******* Classe Pessoa sem construtor *******');
console.log('Nome:', pessoa.nome); // Lucas
console.log('Idade: ', pessoa.idade); // 22

// **************Diferença da classe usando construtor*******************

//Criando a documentação da classe
/**
 * Classe Pessoa1
 * @param nome - nome da pessoa
 * @param idade - idade da pessoa
 */

export default class Pessoa1 {
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  nome: string;
  idade: number;
}

// Instanciando a classe
const pessoa1 = new Pessoa1('Dakson', 40); // Agora é obrigatório passar os valores na instanciação

// Acessando valores
console.log('******** Classe Pessoa com construtor *********');
console.log('Nome:', pessoa1.nome);
console.log('Idade: ', pessoa1.idade);
