
function Posicao(latitude, longitude) {

    this.latitude = latitude;
    this.longitude = longitude;
    this.timestamp = Date.now();

    this.distancia = function(posicao){
        return Math.sqrt((this.latitude - posicao.latitude ) ** 2 + (this.longitude - posicao.longitude ) ** 2);
    }
}


Posicao.prototype.move = function(deltaX, deltaY){
    return new Posicao(this.latitude + deltaX, this.longitude + deltaY, Date.now());
};


Posicao.prototype.str = function(){
    return '(' + Math.floor(this.latitude) + ', ' + Math.floor(this.longitude) + ')';
};
