class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;    
        }
    }
}

// cria novo cliente
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

// cria novo cliente
const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

// cria nova conta corrente
const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

// realiza deposito na conta
contaCorrenteRicardo.depositar(100);

// realiza saque na conta
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);