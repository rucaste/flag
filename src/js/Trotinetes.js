
function Trotinetes() {

    this.trotinetes = [];

}


Trotinetes.prototype.getTrotinetesDisponiveis = function () {
    var td = [];
    for(var i = 0; i < this.trotinetes.length; i++){
        if(this.trotinetes[i].isDisponivel){
            td.push(this.trotinetes[i])
        }
    }
    return td;
};


Trotinetes.prototype.getTrotineteMaisProxima = function (PosicaoCliente) {
    var trotinetesDisponiceis = this.getTrotinetesDisponiveis();
    if(trotinetesDisponiceis.length === 0){
        return null
    }
    else {
        var distancia = trotinetesDisponiceis[0].posicaoAtual.distancia(PosicaoCliente);
        var trotinte = trotinetesDisponiceis[0];
        if (trotinetesDisponiceis.length > 1) {
            for (var i = 1; i < trotinetesDisponiceis.length; i++) {
                if (trotinetesDisponiceis[0].posicaoAtual.distancia(PosicaoCliente) < distancia) {
                    distancia = trotinetesDisponiceis[i].posicaoAtual.distancia(PosicaoCliente);
                    trotinte = trotinetesDisponiceis[i];
                }
            }
        }
        return trotinte;
    }
};
