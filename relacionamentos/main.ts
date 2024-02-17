import Carro from "./carro";
import Cliente from "./cliente";
import Compra from "./compra";
import Funcionario from "./funcionario";

// Instanciando as classes
const preco = 40000;
const carro = new Carro("Civic", 1999, { tipo: "V8", potencia: 200 }, preco);
const funcionario = new Funcionario("Daniel");
const clente = new Cliente("Dakson", 4000);
const compra = new Compra(clente, funcionario, carro, preco);

// Exibindo os detalhes da compra
console.log(compra.detalhesCompra());