// Objetivo: mostrar o conceito de encapsulamento em TypeScript
// Encapsulamento: é um recurso que permite que os atributos de uma classe fiquem ocultos para outras classes

// Documentando a classe Carro
/**
 * Classe Carro
 * 
 * Classe que representa um carro
 * 
 * Atributos
 * - modelo: string - representa o modelo do carro
 * - ano: number - representa o ano do carro
 * - cor: string - representa a cor do carro
 * - velocidade: number - representa a velocidade do carro
 * 
 * Métodos
 * + acelerar(): void - aumenta a velocidade do carro em 10
 * + parar(): void - para o carro
 * + velocidadeAtual(): number - retorna a velocidade atual do carro
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
export default class Carro {
  private modelo: string | undefined;
  private ano: number | undefined;
  private cor: string | undefined;
  private velocidade: number = 0;

  constructor(modelo: string, ano: number, cor: string) {
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
  }

  // Esses são os Métodos da classe Carro que podem ser acessados de fora da classe os chamados métodos públicos ou GETTERS e SETTERS
  public acelerar(): void {
    this.velocidade = this.velocidade + 10;
  }

  public parar(): void {
    this.velocidade = 0;
  }

  public velocidadeAtual(): number {
    return this.velocidade;
  }
}

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