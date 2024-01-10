//se me reproducia un audio encima de otro todo el rato asi que creo esta variable para que no se cree otro audio mientras esta reproduciendose
var musicaReproduciendose = false;

function generarNumerosAleatorios() {
    //para que suene cada vez que pulses el boton
    var efectoboton = "../media/efecto boton.mp3";
    var audioboton = new Audio(efectoboton);
    audioboton.play();
    var numerosAleatorios = [];
    
    for (var i = 0; i < 4; i++) {
        var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        numerosAleatorios.push(numeroAleatorio);
    }

    return numerosAleatorios;
}

function asignarCartaPorProbabilidad(numeroAleatorio) {
    if (numeroAleatorio <= 15) {
        return "../media/Familia aspid.png";
    } else if (numeroAleatorio <= 30) {
        return "../media/Tiso.png";
    } else if (numeroAleatorio <= 45) {
        return "../media/Cloth.png";
    } else if (numeroAleatorio <= 60) {
        return "../media/Cornifer e Iselda.png";
    } else if (numeroAleatorio <= 75) {
        return "../media/Quierrel.png";
    } else if (numeroAleatorio <= 85) {
        return "../media/Señores mantis.png";
    } else if (numeroAleatorio <= 90) {
        return "../media/Zote el Todopoderoso.png";
    } else if (numeroAleatorio <= 95) {
        return "../media/El caballero.png";
    } else if (numeroAleatorio <= 97) {
        return "../media/Hornet la princesa protectora.png";
     } else if (numeroAleatorio <= 98) {
        return "../media/Hollow Knight.png";
    } else {
        return "../media/El rey pálido.png";
    }
}



var cartasObtenidas = [];
function asignarCartas() {
    var numerosAleatorios = generarNumerosAleatorios();
   
    var efecto = '../media/efecto rey.mp3';
    var audioefecto= new Audio(efecto);
    
    for (var i = 0; i < numerosAleatorios.length; i++) {

        var numeroAleatorio = numerosAleatorios[i];
        var imagen = asignarCartaPorProbabilidad(numeroAleatorio);

         // Verificar si la carta ya ha sido obtenida antes
         if (!cartasObtenidas.includes(imagen)) {

            // Cambiar la imagen correspondiente en la colección
            
            var idColeccion = 'c' + (cartasObtenidas.length + 1);
            document.getElementById(idColeccion).src = imagen;
            cartasObtenidas.push(imagen);
        }

       
        document.getElementById('carta' + (i + 1)).src = imagen;
        if (imagen === "../media/El rey pálido.png" ||imagen === "../media/Hornet la princesa protectora.png" ){
            audioefecto.play();
        }
    }
   
}
  

  // Función para reproducir la música en bucle
  function reproducirMusica() {
    
      var urlMusica = '../media/musica ambiente.mp3';

      // Verificar si la música ya está reproduciéndose
      if (!musicaReproduciendose) {
          // Crear elemento de audio
          var audio = new Audio(urlMusica);

          audio.volume = 0.15;
          // Reproducir en bucle
          audio.loop = true;
          audio.play();

          // Establecer la variable de control a true para indicar que la música está reproduciéndose
          musicaReproduciendose = true;
      }
  }

// Mostrar alerta al cargar la página
window.onload = function () {
    // Mostrar el mensaje de alerta
    var aceptar = confirm("¿Quieres escuchar música de fondo?");
    
    // Si el usuario acepta, reproducir la música
    if (aceptar) {
        document.body.addEventListener('click', function() {
            reproducirMusica();
        });
    }
};
