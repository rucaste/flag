const p1 = 2;
const p2 = .1;

function Reserva(user, trotinete) {

    this.user = user;
    this.trotinete = trotinete;
    this.posicoes = [];
    this.concluido = false;
    this.pago = false;
    this.concluida = false;

}

Reserva.prototype.duracao = function(){
    return this.posicoes[this.posicoes.length - 1].timestamp - this.posicoes[0].timestamp
}

Reserva.prototype.distanciaPercorrida = function(){
    var distancia_percorrida = 0;
    for(var i = 1; i < this.posicoes.length; i++){
        distancia_percorrida = distancia_percorrida + this.posicoes[i].distancia(this.posicoes[i-1])
    }
    return distancia_percorrida
}

Reserva.prototype.valorAPagar = function(){
    return this.duracao() * p1 + this.distanciaPercorrida() * p2;
}

Reserva.prototype.getFinalMessage = function(){
    return "Viagem concluída\nDuração: " + this.duracao() + " minutos\nDistância percorrida: " 
    + this.distanciaPercorrida() + " km\nValor debitado: " + this.valorAPagar() + " €"
}

Reserva.prototype.concluir = function(){
    this.concluida = true;
    this.trotinete.isDisponivel = true;
    this.user.comReserva = false;
}

Reserva.prototype.init = function(){
    this.trotinete.isDisponivel = false;
    this.user.comReserva = true;
    this.posicoes.push(this.trotinete.posicaoAtual);
    var i = 10;
    while (!this.concluida && i > 0){
        var posicaoAtual = this.trotinete.posicaoAtual;
        var novaPosicao = posicaoAtual.move(1, 1,);
        this.trotinete.posicaoAtual = novaPosicao;
        this.posicoes.push(novaPosicao);
        i--;
    }
}


