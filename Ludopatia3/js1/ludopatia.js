var bienvenido = prompt("¡Hola!, bienvenido a la ludopatía máxima jeje, ingresa tu nombre para empezar a gastar dinero como si no hubiese un mañana: ");  //Un alert que aparecerá al principio de la pagina para que el usuario ingrese su nombre.
alert("¡Holaaaa, " + bienvenido + " bienvenido, espero que no acabes con deudas... :)");

document.addEventListener("DOMContentLoaded", function (){ //Por otro lado dos funciones, una para preguntar si el usuario quiere iniciar la musica de fondo (ya que los navegadores no dejan), y otra para que se active al hacer click en la página.
    preguntarReproduccionMusica();
});

function preguntarReproduccionMusica(){
    var respuesta = confirm("¿Quieres iniciar la música de fondo (Porfi :3, que está muy bien)?");

    if (respuesta) {
        iniciarMusica();
    } else {
        alert("La música no se va a reproducir, tu te lo pierdes.");
    }
}

function iniciarMusica() {
    var audio = new Audio('mp3/cs.mp3');

    // Verificar si el navegador admite la reproducción automática.
    var reproduccionAutomaticaSoportada = audio.autoplay;

    if (reproduccionAutomaticaSoportada !== undefined && reproduccionAutomaticaSoportada !== null && !reproduccionAutomaticaSoportada) {
        alert("La reproducción automática de audio no está permitida en tu navegador. Haz clic en la página para iniciar la música.");
        document.addEventListener("click", function () {
            audio.play();
            alert("La música se está reproduciendo, esta guapa ehhh");
        }, { once: true });
    } else {
        audio.play();
        alert("La música de csgo de fondo se está reproduciendo")
    }
}
const items = { // Añadimos los objetos que habrá dentro de cada una de las cajas, y las declaramos como constantes.
  '1': ['img/JA.png', 'img/aaaaaaaaaa.png', 'img/fdsa.png', 'img/jeje.png', 'img/SIP.png','img/a.png'],
  '2': ['img/aaa.png','img/uiui.png', 'img/g.png', 'img/HD.png', 'img/uiui.png', 'img/f.png', 'img/a.png'],
  '3': ['img/b.png', 'img/c.png', 'img/f.png', 'img/HG.png', 'img/rfds.png', 'img/r.png', 'img/a.png'],
  '4': ['img/JA.png', 'img/aaaaaaaaaa.png', 'img/fdsa.png', 'img/jeje.png', 'img/SIP.png','img/a.png'],
  '5': ['img/aaa.png','img/uiui.png', 'img/g.png', 'img/HD.png', 'img/uiui.png', 'img/f.png', 'img/a.png'],
  '6': ['img/b.png', 'img/c.png', 'img/f.png', 'img/HG.png', 'img/rfds.png', 'img/r.png', 'img/a.png'],
  '7': ['img/aaa.png','img/uiui.png', 'img/g.png', 'img/HD.png', 'img/uiui.png', 'img/f.png', 'img/a.png'],
  '8': ['img/b.png', 'img/c.png', 'img/f.png', 'img/HG.png', 'img/rfds.png', 'img/r.png', 'img/a.png'],
  '9': ['img/JA.png', 'img/aaaaaaaaaa.png', 'img/fdsa.png', 'img/jeje.png', 'img/SIP.png','img/a.png'],
  '11': ['img/aaa.png','img/uiui.png', 'img/g.png', 'img/HD.png', 'img/uiui.png', 'img/f.png', 'img/a.png'],
  
};
let currentCase = '' ;


function showCase(caseNumber){
  currentCase = caseNumber;
  document.getElementById('box').style.display = 'block';
  document.getElementById('openButton').disabled = true; //El botón de abrir caja no se activará hasta que aparezcan todos los items.
  document.getElementById('content').innerHTML = '';

  // Oculta todas las demás cajas
  const allCases = document.querySelectorAll('.cases');
  allCases.forEach((box) =>{
    if (box.id !== caseNumber) {
      box.style.display = 'none';
    }
  });
  
  //La animación se reproducirá mientras los objetos (armas) de la caja van saliendo.
  const itemsForCurrentCase = items[currentCase];
  const contentDiv = document.getElementById('content');
  contentDiv.classList.add('animate-slideshow');

  for (let i = 0; i < itemsForCurrentCase.length; i++) {
    const item = itemsForCurrentCase[i];
    setTimeout(() => {
      contentDiv.innerHTML += `<img src="${item}" alt="${item}" class="slide">`;

      if (i === itemsForCurrentCase.length - 1) { //Cuando la caja se haya abierto, el botónde abir caja se desabilitará y solo se podrá pulsar el de volver.
        document.getElementById('openButton').disabled = false;
      }
    }, (i + 1) * 1000);
  }
}

function openBox(){ //Función para que el usuario al abrir la caja, la página escoja uno de los objetos que se enseñan de forma aleatoria,  y lo muestra por pantalla.
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';

   const itemsForCurrentCase = items[currentCase];

  // Escoge un número aleatorio para determinar si aparecerá "a.png" con un 5% de probabilidad.
  const randomProbability = Math.random();

  let finalItem;

  if (randomProbability <= 0.05){
    // Si el número aleatorio está en el rango del 5%, elige "a.png" (que es el objeto raro) con probabilidad del 5%.
    finalItem = 'img/a.png';
  } else {
    // Y si no, elige un objeto aleatorio de la caja.
    const randomItemIndex = Math.floor(Math.random() * itemsForCurrentCase.length);
    finalItem = itemsForCurrentCase[randomItemIndex];
  }
  // Cambia la imagen si es "img/a.png", donde se mostrará el objeto especial (cuchillo) entre 3 diferentes que he añadido.
  if (finalItem === 'img/a.png') {
    const alternativeItems = ['img/gh.png', 'img/hh.png', 'img/gh.png'];
    finalItem = alternativeItems[Math.floor(Math.random() * alternativeItems.length)];
  }
  
  setTimeout(() => {
    contentDiv.innerHTML = `<img src="${finalItem}" alt="${finalItem}">`;
    document.getElementById('openButton').disabled = true; // Desactiva el botón al abrir la caja para evitar fallos.
  }, 500);
}

function backToMenu() { //Función utilizada para volver al menú al tocar el botón de "volver".
  const allCases = document.querySelectorAll('.cases');
  
    allCases.forEach((box) => {
    box.style.display = 'inline-block'; //Esto hará que al tocar el botón de volver las cajas se ordenen de la manera en la que estaban al iniciar la página, y evita que se pongan de forma vertical una encima de otra.
    box.style.top = ''; // Restablece la propiedad 'top' para que no afecte la posición
  });
  //Estas hacen que al abrir una caja evite que las imagenes de las cajas se pongan por encima del slide, y también evita problemas al volver al menú.
  document.getElementById('box').style.display = 'none';
  document.getElementById('content').innerHTML = '';
}	