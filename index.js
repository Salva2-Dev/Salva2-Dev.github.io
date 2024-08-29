
const happyButton = document.getElementById("happyButton");
const sadButton = document.getElementById("sadButton");
const happySong = document.getElementById("happySong");
const sadSong = document.getElementById("sadSong");
const parar = document.getElementById("parar");

happyButton.addEventListener("click", function() {
    if (sadSong.paused === false) {
        sadSong.pause();
    }
    happySong.play();
});

sadButton.addEventListener("click", function() {
    if (happySong.paused === false) {
        happySong.pause();
    }
    sadSong.play();
});

parar.addEventListener("click", function() {
  if (happySong.paused === false) {
      happySong.pause();
  }
  if (sadSong.paused === false) {
      sadSong.pause();
  }
});




happySong.addEventListener('play', function() {
  happyButton.classList.add('selected');
  sadButton.classList.remove('selected');
});

sadSong.addEventListener('play', function() {
  sadButton.classList.add('selected');
  happyButton.classList.remove('selected');

});



parar.addEventListener("click", function() {
  happySong.pause();
  sadSong.pause();
  happyButton.classList.remove("selected");
  sadButton.classList.remove("selected");
});



const textoPrincipal = "Bienvenidos a SalvaCode.dev <br> ¿Empezamos? . . .";
const textoAlternativo = "Bienvenidos a <br> SalvaCode.dev <br> ¿Empezamos? . . .";
const tiempoEntreLetras = 150;
const letrasPorIntervalo = 1; 

let i = 0;
let j = 0; 

function escribirTexto(textoCompleto, elementoDestino) {
  if (i < textoCompleto.length) {
    const letraActual = textoCompleto.charAt(i);
    if (letraActual === "<") {
      const siguienteCaracter = textoCompleto.charAt(i + 1);
      if (siguienteCaracter === "b" && textoCompleto.charAt(i + 2) === "r" && textoCompleto.charAt(i + 3) === ">") {
        elementoDestino.innerHTML += "<br>";
        i += 4; 
      }
    } else {
      elementoDestino.innerHTML += letraActual;
      j++;
      if (j === letrasPorIntervalo) {
        j = 0;
        i++;
      }
    }
    setTimeout(() => escribirTexto(textoCompleto, elementoDestino), tiempoEntreLetras);
  }
}

const elementoPrincipal = document.getElementById("texto-escrito");
const elementoAlternativo = document.getElementById("texto-adicional");

if (window.innerWidth <= 768) {
  escribirTexto(textoAlternativo, elementoAlternativo);
} else {
  escribirTexto(textoPrincipal, elementoPrincipal);
}











setTimeout(function () {
    document.getElementById("miEnlace").style.display = "inline-block";
}, 9000);








const certificadoLinks = document.querySelectorAll('#certificado a');

certificadoLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const imageSrc = link.dataset.image;
        const confirmBox = confirm('¿Deseas ver el certificado?');
        if (confirmBox) {
            window.open(imageSrc, '_blank');
        }
    });
});










window.addEventListener('scroll', function () {
    var headerBottom = document.querySelector('.header-bottom');
    var headerTopHeight = document.querySelector('.header-top').offsetHeight;
    var scrollPosition = window.scrollY;

    if (scrollPosition > headerTopHeight) {
        headerBottom.classList.add('fixed');
    } else {
        headerBottom.classList.remove('fixed');
    }
});







window.addEventListener('scroll', () => {
    const animElems = document.querySelectorAll('.scroll-anim');
    animElems.forEach(elem => {
      if (isElemVisible(elem)) {
        elem.classList.add('show');
      }
    });
  });
  
  function isElemVisible(elem) {
    const rect = elem.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
  



  const button = document.querySelector('form button[type="submit"]');

  button.addEventListener('click', function() {
    button.classList.add('pulse');
    setTimeout(function() {
      button.classList.remove('pulse');
    }, 1000);
  });







