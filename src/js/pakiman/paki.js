var imagenes=[];
imagenes["Cauchin"]="src/js/villa/vaca.png";
imagenes["Pokacho"]="src/js/villa/pollo.png";
imagenes["Tocinauro"]="src/js/villa/cerdo.png";
class Pakiman{
    constructor(n, v, a){
        this.imagen=new Image();
        this.nombre= n;
        this.vida= v;
        this.ataque= a;

        this.imagen.src = imagenes[this.nombre];
    }
    hablar(){
        alert(this.nombre);
    }
    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>"+ this.nombre +"</strong><br>");
        document.write("Vida: "+ this.vida +"<br>");
        document.write("Ataque: "+ this.ataque +"<br> ");
        document.write("</p> <hr>");
    }
}

var cauchin = new Pakiman("Cauchin",100,30);
var pokacho = new Pakiman("Pokacho",80,50);
var tocinauro = new Pakiman ("Tocimauro", 120, 40);

pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();