const p1 =2;
const p2 = .05;

function Reserva(user, trotinete, posicaoInicial) {

    this.user = user;
    this.trotinete = trotinete;
    this.posicoes = [posicaoInicial, ];
    this.concluido = false;
    this.pago = false;

    this.init = function (reserva) {
        /* this.trotinete.start(this) */
    };

    this.duracao = function(){
        return this.posicoes[-1].timestamp - this.posicoes[0].timestamp
    };

    this.distanciaPercorrida = function(){
        var distancia_percorrida = 0;
        for(var i = 1; i < this.posicoes.length; i++){
            distancia_percorrida = distancia_percorrida + this.posicoes[i].distancia(this.posicoes[i-1])
        }
        return distancia_percorrida
    };

    this.valorAPagar = function () {
        return this.duracao * p1 + this.distanciaPercorrida * p2;
    };
}
