var bienvenido = prompt("¡Hola!, bienvenido a la ludopatía máxima jeje, ingresa tu nombre para empezar a gastar dinero como si no hubiese un mañana: ");  //Un alert que aparecerá al principio de la pagina para que el usuario ingrese su nombre.
alert("¡Holaaaa, " + bienvenido + " bienvenido, espero que no acabes con deudas... :)");

document.addEventListener("DOMContentLoaded", function () { //Por otro lado dos funciones, una para preguntar si el usuario quiere iniciar la musica de fondo (ya que los navegadores no dejan), y otra para que se active al hacer click en la página.
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

    // Verificar si el navegador admite la reproducción automática
    var reproduccionAutomaticaSoportada = audio.autoplay;

    if (reproduccionAutomaticaSoportada !== undefined && reproduccionAutomaticaSoportada !== null && !reproduccionAutomaticaSoportada) {
        alert("La reproducción automática de audio no está permitida en tu navegador. Haz clic en la página para iniciar la música.");
        document.addEventListener("click", function () {
            audio.play();
            alert("La música se está reproduciendo, esta guapa ehhh");
        }, { once: true });
    } else {
        audio.play();
        alert("La música de csgo de fondo se está reproduciendo");
    }
}
const items = { // Añadimos los objetos que habrá dentro de cada una de las cajas, y las declaramos como constantes.
  '1': ['img/JA.png', 'img/aaaaaaaaaa.png', 'img/fdsa.png', 'img/jeje.png', 'img/SIP.png','img/a.png'],
  '2': ['img/aaa.png','img/uiui.png', 'img/g.png', 'img/HD.png', 'img/uiui.png', 'img/f.png', 'img/a.png'],
  '3': ['img/b.png', 'img/c.png', 'img/f.png', 'img/HG.png', 'img/rfds.png', 'img/sd.png', 'img/a.png'],
  '4': ['img/JA.png', 'img/aaaaaaaaaa.png', 'img/fdsa.png', 'img/jeje.png', 'img/SIP.png','img/a.png'],
  '5': ['img/aaa.png','img/uiui.png', 'img/g.png', 'img/HD.png', 'img/uiui.png', 'img/f.png', 'img/a.png'],
  '6': ['img/b.png', 'img/c.png', 'img/f.png', 'img/HG.png', 'img/rfds.png', 'img/sd.png', 'img/a.png'],
  '7': ['img/aaa.png','img/uiui.png', 'img/g.png', 'img/HD.png', 'img/uiui.png', 'img/f.png', 'img/a.png'],
  '8': ['img/b.png', 'img/c.png', 'img/f.png', 'img/HG.png', 'img/rfds.png', 'img/sd.png', 'img/a.png'],
  '9': ['img/JA.png', 'img/aaaaaaaaaa.png', 'img/fdsa.png', 'img/jeje.png', 'img/SIP.png','img/a.png'],
  '11': ['img/aaa.png','img/uiui.png', 'img/g.png', 'img/HD.png', 'img/uiui.png', 'img/f.png', 'img/a.png'],
  
};
let currentCase = '' ;


function showCase(caseNumber) {
  currentCase = caseNumber;
  document.getElementById('box').style.display = 'block';
  document.getElementById('openButton').disabled = true;
  document.getElementById('content').innerHTML = '';

  // Oculta todas las demás cajas
  const allCases = document.querySelectorAll('.cases');
  allCases.forEach((box) => {
    if (box.id !== caseNumber) {
      box.style.display = 'none';
    }
  });

  const itemsForCurrentCase = items[currentCase];
  const contentDiv = document.getElementById('content');
  contentDiv.classList.add('animate-slideshow');

  for (let i = 0; i < itemsForCurrentCase.length; i++) {
    const item = itemsForCurrentCase[i];
    setTimeout(() => {
      contentDiv.innerHTML += `<img src="${item}" alt="${item}" class="slide">`;

      if (i === itemsForCurrentCase.length - 1) {
        document.getElementById('openButton').disabled = false;
      }
    }, (i + 1) * 1000);
  }
}

function openBox(){ //Función para que el usuario al abrir la caja, la página escoja uno de los objetos que se enseñan de forma aleatoria,  y lo muestra por pantalla.
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';

  const itemsForCurrentCase = items[currentCase];

  // Escoge un objeto random de los que hay en la caja
  const randomItemIndex = Math.floor(Math.random() * itemsForCurrentCase.length);
  const randomItem = itemsForCurrentCase[randomItemIndex];

  // Cambia la imagen si es 'img/a.png', donde se mostrará el objeto especial (cuchillo) entre 3 diferentes.
  let finalItem;
  if (randomItem === 'img/a.png'){
    const alternativeItems = ['img/gh.png', 'img/hh.png', 'img/gh.png'];
    finalItem = alternativeItems[Math.floor(Math.random() * alternativeItems.length)];
  } else {
    finalItem = randomItem;
  }

  // Hace una simulación de apertura de cajas
  setTimeout(() => {
    contentDiv.innerHTML = `<img src="${finalItem}" alt="${finalItem}">`;
    document.getElementById('openButton').disabled = true; // Desactiva el botón al abrir la caja para evitar fallos.
  }, 500);
}
function backToMenu() {
  const allCases = document.querySelectorAll('.cases');

  // Muestra todas las cajas y oculta la caja actual
  allCases.forEach((box) => {
    box.style.display = 'flex';
    box.style.top = ''; // Restablece la propiedad 'top' para que no afecte la posición
  });

  document.getElementById('box').style.display = 'none';
  document.getElementById('content').innerHTML = '';

  // Elimina la clase de animación de las imágenes
  const contentDiv = document.getElementById('content');
  contentDiv.classList.remove('animate-slideshow');

  // Quita la clase 'vertical' de la clase .menu
  document.querySelector('.menu').classList.remove('vertical');
}