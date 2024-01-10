var fuente = 0, numero = -1;
var fecha = new Date();
var tragaperras = new Audio("media/tragaperras.mp3");

function funcion() {
	tragaperras.play();
	setInterval(cambioFuente, 2000);
	setTimeout(noSeXD, 20000);
	document.getElementById("0").innerHTML = "A fecha de que veas esto (" + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() + "), Ludopatía™ es el mejor simulador de RNG de todo el mundo"

}

function cambioFuente() {				// Cada cierto tiempo va cambiando la fuente del header
	switch(fuente) {
		case 0: document.getElementById("h").style.fontFamily = "Times";
		break;
		case 1: document.getElementById("h").style.fontFamily = "Arial";
		break;
		case 2: document.getElementById("h").style.fontFamily = "Consolas";
		break;
		case 3: document.getElementById("h").style.fontFamily = "Palatino";
		break;
		case 4: document.getElementById("h").style.fontFamily = "Courier New";
		break;
		case 5: document.getElementById("h").style.fontFamily = "Impact";
		break;
		case 6: document.getElementById("h").style.fontFamily = "Verdana";
		break;
	}
	
	if (fuente === 6) {
		fuente = -1;
	}
	
	fuente++;
}


function f1() {
	document.getElementById("1").innerHTML = "Gacha de One Piece";
}
function f11() {
	document.getElementById("1").innerHTML = "Ludopatía 1";
}


function f2() {
	document.getElementById("2").style.paddingTop = "20.5vh";
	document.getElementById("2").style.paddingBottom = "2.5vh";
	document.getElementById("2").innerHTML = "Gacha con luchadores hechos de comida";
}
function f22() {
	document.getElementById("2").innerHTML = "Ludopatía 2";
	document.getElementById("2").style.paddingBottom = "";
	document.getElementById("2").style.paddingTop = "23vh";
}


function f3() {
	document.getElementById("3").style.paddingTop = "20.5vh";
	document.getElementById("3").style.paddingBottom = "2.5vh";
	document.getElementById("3").innerHTML = "Abridor de cajas del Counter Strike";
}
function f33() {
	document.getElementById("3").innerHTML = "Ludopatía 3";
	document.getElementById("3").style.paddingBottom = "";
	document.getElementById("3").style.paddingTop = "23vh";
}


function f4() {
	document.getElementById("4").style.paddingTop = "20.5vh";
	document.getElementById("4").style.paddingBottom = "2.5vh";
	document.getElementById("4").innerHTML = "Abridor de packs del Hollow Knight";
}
function f44() {
	document.getElementById("4").innerHTML = "Ludopatía 4";
	document.getElementById("4").style.paddingBottom = "";
	document.getElementById("4").style.paddingTop = "23vh";
}


function f5() {
	document.getElementById("5").innerHTML = "Máquina tragaperras";
}
function f55() {
	document.getElementById("5").innerHTML = "Ludopatía 5";
}


function creditosSí() {
	document.getElementById("h").style.fontSize = "9.9vw";
	document.getElementById("h").innerHTML = "INDEX: RUBÉN";
	document.getElementById("1").innerHTML = "Hecho por Mario";
	document.getElementById("2").innerHTML = "Hecho por Eduardo";
	document.getElementById("3").innerHTML = "Hecho por Iván";
	document.getElementById("4").innerHTML = "Hecho por Nacho";
	document.getElementById("5").innerHTML = "Hecho por Marco";
}

function creditosNo() {
	document.getElementById("h").style.fontSize = "10vw";
	document.getElementById("h").innerHTML = "LUDOPATÍA";
	document.getElementById("1").innerHTML = "Ludopatía 1";
	document.getElementById("2").innerHTML = "Ludopatía 2";
	document.getElementById("3").innerHTML = "Ludopatía 3";
	document.getElementById("4").innerHTML = "Ludopatía 4";
	document.getElementById("5").innerHTML = "Ludopatía 5";
}

function noSeCualPillar() {
	document.getElementById("random").className = "rectangulo";
	
	numero = (Math.ceil(Math.random() * 4));
	switch (numero) {
		case 1: document.getElementById("random").innerHTML = "<a href=ludopatia1/html/html.html>Si no sabes cuál pillar, deja que JavaScript elija por ti</a>"
		break;
		case 2: document.getElementById("random").innerHTML = "<a href=ludopatia2/html.html>Si no sabes cuál pillar, deja que JavaScript elija por ti</a>"
		break;
		case 3: document.getElementById("random").innerHTML = "<a href=ludopatia3/Ludopatia3.html>Si no sabes cuál pillar, deja que JavaScript elija por ti</a>"
		break;
		case 4: document.getElementById("random").innerHTML = "<a href=ludopatia4/html/proyectoignacio.html>Si no sabes cuál pillar, deja que JavaScript elija por ti</a>"
		break;
		case 5: document.getElementById("random").innerHTML = "<a href=ludopatia5/HTML/Ludopatia_5.html>Si no sabes cuál pillar, deja que JavaScript elija por ti</a>"
		break;
	}
}

function siSeCualPillar() {
	numero = -1;
	document.getElementById("random").innerHTML = "Voy a tener suerte";
	document.getElementById("random").className = "rectangulo corto";
}

function noSeXD() {
	confirm("Si tienes dudas sobre qué opción escoger, prueba a darle al botón ''Voy a tener suerte''");
}

function edad() {
	var edad = prompt("Por razones legales, debemos preguntarte tu edad");
	
	if (edad < 18) {
		alert("No tienes la edad suficiente para jugar, pero te dejaremos entrar igualmente :D");
	}
}