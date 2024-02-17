import Carro from "./carro";
import Cliente from "./cliente";
import Funcionario from "./funcionario";

export default class Compra {
  private cliente: Cliente;
  private funcionario: Funcionario;
  private carro: Carro;
  private valor: number;
  private valorComDesconto: number;

  constructor(cliente: Cliente, funcionario: Funcionario, carro: Carro, valor: number) {
    this.cliente = cliente;
    this.funcionario = funcionario;
    this.carro = carro;
    this.valor = valor;
    this.valorComDesconto = 0;
    this.carro.setValor(this.desconto(this.carro.getValor()));
    this.funcionario.setComissao(this.addComissao(this.valor));
  }

  private desconto(valor: number): number {
    if (this.carro.getAno() < 2000) {
      this.valorComDesconto = this.carro.getValor() * 0.90;
      this.carro.setValor(this.valorComDesconto);
    } else {
      this.carro.setValor(valor);
    };

    if (this.cliente.getRenda() < 5000) {
      this.valorComDesconto = this.carro.getValor() * 0.90;
      return this.carro.setValor(this.valorComDesconto);
    } else {
      return this.carro.setValor(this.carro.getValor());
    };

  }

  private addComissao(valor: number): number {
    return this.funcionario.setComissao(valor * 0.02);
  }

  public detalhesCompra(): string {
    return `Cliente: ${this.cliente.getNome()},\n 
    Funcionário: ${this.funcionario.getNome()},\n
    Carro: ${this.carro.getModelo()},\n
    Valor: ${this.carro.getValor()},\n
    Comissão: ${this.funcionario.getComissao()}`;
  }

}