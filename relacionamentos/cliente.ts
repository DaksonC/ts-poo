export default class Cliente {
  private nome: string;
  private renda: number;

  constructor(nome: string, renda: number) {
    this.nome = nome;
    this.renda = renda;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getRenda(): number {
    return this.renda;
  }

  public setRenda(renda: number): void {
    this.renda = renda;
  }
}