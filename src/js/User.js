
function User(id, nome, nif, email) {

    this.id = id;
    this.nome = nome;
    this.nif = nif;
    this.email = email;

    this.saldo = 0;
    this.posicaoAtual = new Posicao(Math.floor(5 + Math.random()*150),
        Math.floor(5 + Math.random()*150),
        Date.now());
}
