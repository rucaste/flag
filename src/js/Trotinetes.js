
function Trotinetes() {

    this.trotinetes = new Map();

    this.getTrotinete = function (id) {
        return this.trotinetes.get(id)
    }

}


Trotinetes.prototype.getTrotinetesDisponiveis = function () {
    var td = [];
    var array_set = Array.from(this.trotinetes.keys());
    for(var i = 0; i < array_set.length; i++){
        if(this.trotinetes.get(array_set[i]).isDisponivel){
            td.push(this.trotinetes.get(array_set[i]))
        }
    }
    return td;
};


Trotinetes.prototype.getTrotineteMaisProxima = function (posicao) {
    var trotinetesDisponiceis = this.getTrotinetesDisponiveis();
    if(trotinetesDisponiceis.length === 0){
        return null
    }
    else {
        var distancia = trotinetesDisponiceis[0].posicaoAtual.distancia(posicao);
        var trotinte = trotinetesDisponiceis[0];
        if (trotinetesDisponiceis.length > 1) {
            for (var i = 1; i < trotinetesDisponiceis.length; i++) {
                if (trotinetesDisponiceis[0].posicaoAtual.distancia(posicao) < distancia) {
                    distancia = trotinetesDisponiceis[i].posicaoAtual.distancia(posicao);
                    trotinte = trotinetesDisponiceis[i];
                }
            }
        }
        return trotinte;
    }
};
