

function Gui(trotinapp) {

    this.trotinapp = trotinapp;

    this.logout = document.getElementById("logout");
    this.login_div =  document.getElementById("login_div");

    this.canvas_div = document.getElementById("canvas_div");
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext('2d');
    this.canvas_lista1 = document.getElementById("canvas_lista1");
    this.localizacao_atual = document.getElementById("localizacao_atual");
    this.canvas_table1_body = document.getElementById("canvas_table1_body");


}

Gui.prototype.updateLogout = function () {
    if(!this.trotinapp.userAtual){
        this.logout.style.display = 'none';
    }
    else {
        this.logout.style.display = 'inline';
    }
};

Gui.prototype.updateLoginDiv = function () {
    if(!this.trotinapp.userAtual){
        this.login_div.style.display = 'block';
    }
    else {
        this.login_div.style.display = 'none';
    }
};


Gui.prototype.updateCanvasDiv = function () {
    if(!this.trotinapp.userAtual){
        this.canvas_div.style.display = 'none';
    }
    else {
        var user = this.trotinapp.userAtual;
        this.canvas_div.style.display = 'block';
        var trotintes = this.trotinapp.trotinetes.getTrotinetesDisponiveis();

        if (!this.trotinapp.userAtual.comReserva ){
            var posicao;
            posicao = this.trotinapp.userAtual.posicaoAtual;
            this.ctx.fillStyle = 'red';
            this.ctx.beginPath();
            this.ctx.arc(posicao.latitude, posicao.longitude, 1, 0, Math.PI * 2, false);
            this.ctx.fill();

            this.localizacao_atual.innerHTML = "user: " + user.email + " - Localização atual: " + posicao.str()+  " - Saldo: " + user.saldo +  " €";
            this.canvas_table1_body.innerHTML = '';

            for (var i = 0; i < trotintes.length; i++) {
                posicao = trotintes[i].posicaoAtual;
                this.ctx.fillStyle = 'blue';
                this.ctx.beginPath();
                this.ctx.arc(posicao.latitude, posicao.longitude, 1, 0, Math.PI * 2, true);
                this.ctx.fill();

                this.canvas_table1_body.innerHTML += '<tr><td>' + trotintes[i].id + '</td><td>' + posicao.str() + '</td><td>' + trotintes[i].nivelCarga + '</td></tr>';
            }
        }
        else {

        }
    }
};

Gui.prototype.updateGUI = function () {
    this.updateCanvasDiv();
    this.updateLogout();
    this.updateLoginDiv();
};

