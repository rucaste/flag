
class Trotinete {

    constructor(id, marca, modelo, potencia, capacidadeBateria) {

        this.modelo = new Modelo(marca, modelo, potencia, capacidadeBateria);

        this.id = id;
        this.dataAquisicao = Date.now();
        this.modelo = modelo; // class Modelo

        this.isAtivo = false;
        this.isDisponivel = false;
        this.nivelCarga = 0;
        this.distanciaPercorrida = 0;
        this.posicaoAtual = null; // class Posicao
        this.userAtual = null; // class User
    }
}
