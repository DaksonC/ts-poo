"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class Carro {
    constructor(modelo, ano, motor, valor) {
        this.modelo = modelo;
        this.ano = ano;
        this.motor = motor;
        this.valor = valor;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    getMotor() {
        return this.motor;
    }
    setMotor(motor) {
        this.motor = motor;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        return this.valor = valor;
    }
}
exports.default = Carro;
