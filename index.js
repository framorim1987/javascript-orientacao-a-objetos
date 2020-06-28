// importação das classes
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

// cria novo cliente
const cliente1 = new Cliente('Ricardo', 11122233309);

const cliente2 = new Cliente('Alice', 88822233309);

// cria nova conta corrente
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

const contaCorrenteAlice = new ContaCorrente(cliente2, 1002);

// realiza deposito na conta
contaCorrenteRicardo.depositar(500);

// realiza saque na conta
contaCorrenteRicardo.sacar(50);

// transfere valor
contaCorrenteRicardo.transferir(200, contaCorrenteAlice);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);
console.log('Número de contas: ', ContaCorrente.numeroDeContas);