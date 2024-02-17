"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = __importDefault(require("./carro"));
const cliente_1 = __importDefault(require("./cliente"));
const compra_1 = __importDefault(require("./compra"));
const funcionario_1 = __importDefault(require("./funcionario"));
// Instanciando as classes
const preco = 40000;
const carro = new carro_1.default("Civic", 1999, { tipo: "V8", potencia: 200 }, preco);
const funcionario = new funcionario_1.default("Daniel");
const clente = new cliente_1.default("Dakson", 4000);
const compra = new compra_1.default(clente, funcionario, carro, preco);
// Exibindo os detalhes da compra
console.log(compra.detalhesCompra());
