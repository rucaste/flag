
class Trotinete {

    constructor(id, marca, modelo, potencia, capacidadeBateria) {

        this.id = id;
        this.modelo = modelo; // class Modelo

        this.isDisponivel = false;
        this.nivelCarga = 0;
        this.distanciaPercorrida = 0;
        this.posicaoAtual = null; // class Posicao
        this.userAtual = null; // class User

        this.posicaoAtual = new Posicao(Math.floor(5 + Math.random()*250),
            Math.floor(5 + Math.random()*150),
            Date.now());
    }

}
