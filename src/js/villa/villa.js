var vp=document.getElementById("dibujar");
var papel = vp.getContext("2d");

var vaca={
    url:"src/js/villa/vaca.png",
    cargaOK: false
};

var fondo={
    url:"src/js/villa/tile.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

/*var cerdo = new Image();
cerdo.src="villa/cerdo.png";
cerdo.addEventListener("load",cargarCerdos);

var pollo = new Image();
pollo.src="villa/pollo.png";
pollo.addEventListener("load",cargarPollos);*/
var cantidad = aleatorio(0,4);
function cargarFondo() {
    fondo.cargaOK=true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK=true;
    dibujar();
}

function dibujar() {
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen, 0,0);
    }
    if(vaca.cargaOK){
        console.log(cantidad);
        for (var v=0; v<cantidad; v++){
            var x = aleatorio(0,5);
            var y = aleatorio(0,5);
            var x = x * 80;
            var y = y * 80;
            papel.drawImage(vaca.imagen, x,y);
        }
    }
}

function aleatorio(min, maxi) {
    var resultado;
    resultado= Math.floor(Math.random()*(maxi - min +1))+min
    return resultado
}