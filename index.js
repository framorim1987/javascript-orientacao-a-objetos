// importação das classes
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

// cria novo cliente
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

// cria nova conta corrente
const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1002;
contaCorrenteAlice.cliente = cliente2;

// realiza deposito na conta
contaCorrenteRicardo.depositar(500);

// transfere valor
contaCorrenteRicardo.transferir(200, contaCorrenteAlice);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);