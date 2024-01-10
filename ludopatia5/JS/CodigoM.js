let iconos = ["../Imagenes/Diamante7.png", "../Imagenes/Naranja6.png", "../Imagenes/Sandia5.png", "../Imagenes/Platano4.png", "../Imagenes/Pera3.png", "../Imagenes/Uva2.png", "../Imagenes/Cereza1.png"];
let texto = ["Has ganado 200k puntos!!!", "Has ganado 80k puntos!", "Has ganado 64k puntos :)", "Has ganado 32k puntos", "Has ganado 16k puntos", "Has ganado 8k puntos", "Has ganado 4k puntos"];
let valorPremio = [200000, 80000, 64000, 32000, 16000, 8000, 4000];
let puntos = 0;
let caja1 = -1;
let caja2 = -1;
let caja3 = -1;

function generarCajas(){
	caja1 = Math.floor(Math.random() * iconos.length);
	caja2 = Math.floor(Math.random() * iconos.length);
	caja3 = Math.floor(Math.random() * iconos.length);
}

function mostrarCajas(){
	document.getElementById("slot1").src = iconos[caja1];
    document.getElementById("slot2").src = iconos[caja2];
    document.getElementById("slot3").src = iconos[caja3];
}
	
function compararCajas(){
	
	if(caja1 == caja2 && caja1 == caja3){
		document.getElementById("premio").innerHTML = '<img src="' + iconos[caja1] + '" alt=Premio" />' + texto[caja1];
		puntos += valorPremio[caja1];
		document.getElementById("Contadorpunt").textContent = puntos;
		
	} else{
		document.getElementById("premio").innerHTML = "No has ganado nada, F";
	}
}

function iniciarJuego(){
	
	generarCajas();
	mostrarCajas();
	compararCajas();
}