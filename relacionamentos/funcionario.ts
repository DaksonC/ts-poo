export default class Funcionario {
  private nome: string;
  private comissao: number = 0;

  constructor(nome: string) {
    this.nome = nome;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getComissao(): number {
    return this.comissao;
  }

  public setComissao(comissao: number): number {
    return this.comissao = comissao;
  }
}