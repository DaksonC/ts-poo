"use strict";
// Objetivo: mostrar o conceito de encapsulamento em TypeScript
// Encapsulamento: é um recurso que permite que os atributos de uma classe fiquem ocultos para outras classes
Object.defineProperty(exports, "__esModule", { value: true });
// Documentando a classe Carro
/**
 * Classe Carro
 *
 * Classe que representa um carro
 *
 * Atributos
 * - @param modelo: string - representa o modelo do carro
 * - @param ano: number - representa o ano do carro
 * - @param cor: string - representa a cor do carro
 * - @param velocidade: number - representa a velocidade do carro
 *
 * Métodos
 * + @param acelerar(): void - aumenta a velocidade do carro em 10
 * + @param parar(): void - para o carro
 * + @param velocidadeAtual(): number - retorna a velocidade atual do carro
 *
 * Restrições
 * - modelo, ano e cor não podem ser vazios
 * - ano deve ser maior que 1900
 * - velocidade não pode ser negativa
 *
 * Exemplo de uso
 * const carro = new Carro('Fusca', 1970, 'Vermelho');
 * carro.acelerar();
 * carro.acelerar();
 * carro.acelerar();
 * console.log(carro.velocidadeAtual()); // 30
 * carro.parar();
 * console.log(carro.velocidadeAtual()); // 0
 */
//Definindo a classe Carro
class Carro {
    constructor(modelo, ano, cor) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    // Esses são os Métodos da classe Carro que podem ser acessados de fora da classe os chamados métodos públicos ou GETTERS e SETTERS
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
exports.default = Carro;
// Testando a classe Carro
const carro = new Carro('Fusca', 1970, 'Vermelho');
// Veja se tentarmos acessar os atributos diretamente, teremos um erro, pois eles são privados.
// Já os métodos podem ser acessados normalmente, pois são públicos. Ao digitar carro. você verá os métodos disponíveis, que são "acelerar", "parar" e "velocidadeAtual".
// Mostrar Atributos e velocidade atual
carro.acelerar();
carro.acelerar();
carro.parar();
carro.velocidadeAtual();
console.log(carro);
// OBS: Os modificadores de acesso são: private, protected e public. O modificador de acesso private é usado para definir um atributo como privado em que só a própria classe pode acessar. O modificador de acesso protected é usado para definir um atributo como protegido em que a própria classe e as classes filhas podem acessar. O modificador de acesso public é usado para definir um atributo como público em que qualquer classe pode acessar. Por padrão, os atributos e métodos são públicos.
