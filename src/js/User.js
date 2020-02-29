
function User(id, nome, nif, email, password) {

    this.id = id;
    this.nome = nome;
    this.password=password;
    this.nif = nif;
    this.email = email;
    this.historicoDeReservas = new Reservas();
    this.comReserva = false;

    this.saldo = 0;
    this.posicaoAtual = new Posicao(Math.floor(5 + Math.random()*250),
        Math.floor(5 + Math.random()*150),
        Date.now());

}

