interface Motor {
  tipo: string;
  potencia: number;
};

export default class Carro {
  private modelo: string;
  private ano: number;
  private motor: Motor;
  private valor: number;

  constructor(modelo: string, ano: number, motor: Motor, valor: number) {
    this.modelo = modelo;
    this.ano = ano;
    this.motor = motor;
    this.valor = valor;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  public getAno(): number {
    return this.ano;
  }

  public setAno(ano: number): void {
    this.ano = ano;
  }

  public getMotor(): Motor {
    return this.motor;
  }

  public setMotor(motor: Motor): void {
    this.motor = motor;
  }

  public getValor(): number {
    return this.valor;
  }

  public setValor(valor: number): number {
    return this.valor = valor;
  }
}