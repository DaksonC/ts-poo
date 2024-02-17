// Objetivo: definir uma interface
// Interfaces: são contratos que definem as propriedades e métodos que uma classe deve implementar. Dessa forma, uma interface define um contrato que deve ser seguido pelas classes que a implementam. As interfaces são muito utilizadas para definir contratos em TypeScript.

// Documentando a interface Rato
/**
 * Interface Rato
 * 
 * Representa um rato
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

interface Rato {
  nome: string;
  peso: number;
  idade: number;
  cor: string;
  dormir(): void;
  correr(): void;
  comer(): void;
  brincar(): void;
};

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

class RatoCinza implements Rato { // A classe RatoCinza implementa a interface Rato. Repare que a classe RatoCinza deve implementar todas as propriedades e métodos definidos na interface Rato senão ocorrerá um erro de compilação
  nome: string;
  peso: number;
  idade: number;
  cor: string;

  constructor(nome: string, peso: number, idade: number, cor: string) {
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