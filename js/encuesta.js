var fuente = 0;
var clic = new Audio("media/clic.mp3");


function funcion() {
	setInterval(cambioFuente, 2000);
}

function cambioFuente() {				// Cada cierto tiempo va cambiando la fuente del header
	switch(fuente) {
		case 0: document.getElementById("h2").style.fontFamily = "Times";
		break;
		case 1: document.getElementById("h2").style.fontFamily = "Arial";
		break;
		case 2: document.getElementById("h2").style.fontFamily = "Consolas";
		break;
		case 3: document.getElementById("h2").style.fontFamily = "Palatino";
		break;
		case 4: document.getElementById("h2").style.fontFamily = "Courier New";
		break;
		case 5: document.getElementById("h2").style.fontFamily = "Impact";
		break;
		case 6: document.getElementById("h2").style.fontFamily = "Verdana";
		break;
	}
	
	if (fuente === 6) {
		fuente = -1;
	}
	
	fuente++;
}

function encuestaEnviada() {
	document.getElementById("encuesta").reset();
	alert("Lo que has puesto no se ha enviado a ningún sitio porque no tenemos servidor, pero agradecemos tu participación :)");
}

function sonidoClic() {
	clic.play();
}