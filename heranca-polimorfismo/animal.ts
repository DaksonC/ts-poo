// Objetivo: entender herança e polimorfismo
// Herança: é um recurso que permite que uma classe herde atributos e métodos de outra classe
// Polimorfismo: é um recurso que permite que uma classe filha sobrescreva(copiar/escrever por cima) um método da classe pai

// Documentando a classe Animal
/**
 * Classe Animal
 * @param tipo - tipo do animal
 * @param nome - nome do animal
 * @param idade - idade do animal
 */

export default class Animal {
  tipo: string | undefined;
  nome: string | undefined;
  idade: number | undefined;

  constructor(tipo: string, nome: string, idade: number) {
    this.tipo = tipo;
    this.nome = nome;
    this.idade = idade;
  }
  // Criar um método para mostrar o som do animal (os métodos também podem ser herdados)
  public som(): void {
    console.log('Som do animal');
  }
}

// Documentando a classe Cachorro
/**
 * Classe Cachorro
 * @param raca - raça do cachorro
 */

class Cachorro extends Animal { // A classe Cachorro herda da classe Animal
  raca: string | undefined;

  constructor(tipo: string, nome: string, idade: number, raca: string) {
    super(tipo, nome, idade);
    this.raca = raca;
  }
  // Sobrescrevendo o método som da classe Animal/Pai
  public som(): void {
    console.log('Au au');
  }
}

// Documentando a classe Gato
/**
 * Classe Gato
 * @param cor - cor do gato
 */

class Gato extends Animal { // A classe Gato herda da classe Animal
  cor: string | undefined;

  constructor(tipo: string, nome: string, idade: number, cor: string) {
    super(tipo, nome, idade);
    this.cor = cor;
  }
  // Sobrescrevendo o método som da classe Animal/Pai
  public som(): void {
    console.log('Miau');
  }
}

// Instanciando um cachorro
const cachorro = new Cachorro('Cachorro', 'Rex', 3, 'Vira-lata');
cachorro.som(); // Exibindo o som do cachorro mesmo que o método som seja da classe Animal/Pai

// Instanciando um gato
const gato = new Gato('Gato', 'Mingau', 2, 'Branco');
gato.som(); // Exibindo o som do gato mesmo que o método som seja da classe Animal/Pai

// Exibindo os dados do cachorro
console.log(cachorro);

// Exibindo os dados do gato
console.log(gato);