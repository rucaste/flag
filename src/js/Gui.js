

function Gui(trotinapp) {

    this.trotinapp = trotinapp;
    this.trotinapp.registarListener(this);

    this.logout = document.getElementById("logout");
    this.login_div =  document.getElementById("login_div");

    this.canvas_div = document.getElementById("canvas_div");
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext('2d');
    this.canvas_lista1 = document.getElementById("canvas_lista1");
    this.localizacao_atual = document.getElementById("localizacao_atual");
    this.canvas_table1_body = document.getElementById("canvas_table1_body");
    this.canvas_table2_body = document.getElementById("canvas_table2_body");
    this.trotinete_form = document.getElementById("trotinete_form");

    document.getElementById("signup_form").addEventListener("submit", this.addUser.bind(this));
    document.getElementById("login_form").addEventListener("submit", this.login.bind(this));
    document.getElementById("reserva_form").addEventListener("submit", this.iniciarReserva.bind(this));

}


// Metodos (API)

Gui.prototype.login = function(evento){
    evento.preventDefault(); 
	var form = evento.target;
    this.trotinapp.login(form["email1"].value, form["password1"].value);
    this.updateGUI();
}

Gui.prototype.addUser = function(evento){
    evento.preventDefault(); 
	var form = evento.target;
    this.trotinapp.addUser(form["nome"].value, form["nif"].value, form["email2"].value, form["password2"].value);
    this.updateGUI();
}

Gui.prototype.logout = function(){
    if(this.trotinapp.userAtual.comReserva){
        alert('Ainda tem uma reserva ativa!! \nPor favor, finalize a reserva ativa antes de fazer logout.')
    }
    else {
        this.trotinapp.userAtual = null;
        this.updateGUI();
    }
}

Gui.prototype.iniciarReserva = function(evento){
    evento.preventDefault(); 
	var form = evento.target;
    this.trotinapp.iniciarReserva(form["trotinete_form"].value);
    this.updateGUI();
}

Gui.prototype.concluirReserva = function(user){
    for(var i = user.historicoDeReservas.reservas.length - 1; i >= 0; i--){
        if(!user.historicoDeReservas.reservas[i].concluido){
            var reservaFim = user.historicoDeReservas.reservas[i];
            reservaFim.concluir();
            alert(reservaFim.getFinalMessage());
            break;
        }
    }
}


// Render

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
            this.trotinete_form.innerHTML = '';

            for (var i = 0; i < trotintes.length; i++) {
                posicao = trotintes[i].posicaoAtual;
                var id = trotintes[i].id;
                this.ctx.fillStyle = 'blue';
                this.ctx.beginPath();
                this.ctx.arc(posicao.latitude, posicao.longitude, 1, 0, Math.PI * 2, true);
                this.ctx.fill();

                this.canvas_table1_body.innerHTML += '<tr><td>' + trotintes[i].id + '</td><td>' + posicao.str() + '</td><td>' + trotintes[i].nivelCarga + '</td></tr>';
                this.trotinete_form.innerHTML += '<option value="' +id + '">' + id + '</option>';
            }

            var reservas =  user.historicoDeReservas.reservas;
            for (var i = 0; i < reservas.length; i++) {
                var reserva = reservas[i];

                this.canvas_table2_body.innerHTML += '<tr><td>' + reserva.id + '</td></tr>';
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

