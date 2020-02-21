const p1 =2;
const p2 = .05;


function Reserva(user, trotinete, posicaoInicial) {

    this.user = user;
    this.trotinete = trotinete;

    this.posicoes = [posicaoInicial, ];

    this.concluido = false;
    this.pago = false;

    this.duracao = function(){
        return this.posicoes[-1].timestamp - this.posicoes[0].timestamp
    };

    this.distanciaPercorrida = function(){
        var distancia = 0;
        for(var i = 1; i < this.posicoes.length; i++){
            distancia = distancia + Math.sqrt((this.posicoes[i].latitude - this.posicoes[i-1].latitude ) ** 2 +
                (this.posicoes[i].longitude - this.posicoes[i-1].longitude ) ** 2)
        }
        return distancia
    };

    this.valorAPagar = function () {
        return this.duracao * p1 + this.distanciaPercorrida * p2;
    };
}
