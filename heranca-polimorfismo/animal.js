"use strict";
// Objetivo: entender herança e polimorfismo
// Herança: é um recurso que permite que uma classe herde atributos e métodos de outra classe
// Polimorfismo: é um recurso que permite que uma classe filha sobrescreva(copiar/escrever por cima) um método da classe pai
Object.defineProperty(exports, "__esModule", { value: true });
// Documentando a classe Animal
/**
 * Classe Animal
 * @param tipo - tipo do animal
 * @param nome - nome do animal
 * @param idade - idade do animal
 */
class Animal {
    constructor(tipo, nome, idade) {
        this.tipo = tipo;
        this.nome = nome;
        this.idade = idade;
    }
    // Criar um método para mostrar o som do animal (os métodos também podem ser herdados)
    som() {
        console.log('Som do animal');
    }
}
exports.default = Animal;
// Documentando a classe Cachorro
/**
 * Classe Cachorro
 * @param raca - raça do cachorro
 */
class Cachorro extends Animal {
    constructor(tipo, nome, idade, raca) {
        super(tipo, nome, idade);
        this.raca = raca;
    }
    // Sobrescrevendo o método som da classe Animal/Pai
    som() {
        console.log('Au au');
    }
}
// Documentando a classe Gato
/**
 * Classe Gato
 * @param cor - cor do gato
 */
class Gato extends Animal {
    constructor(tipo, nome, idade, cor) {
        super(tipo, nome, idade);
        this.cor = cor;
    }
    // Sobrescrevendo o método som da classe Animal/Pai
    som() {
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
