
function Posicao(latitude, longitude) {

    this.latitude = latitude;
    this.longitude = longitude;
    this.timestamp = Date.now();

    this.distancia = function(posicao){
        return Math.sqrt((this.latitude - posicao.latitude ) ** 2 + (this.longitude - posicao.longitude ) ** 2);
    }
}
