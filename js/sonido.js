document.addEventListener("DOMContentLoaded", function () {
  var sounds = {};

  // Agrega un evento de clic a cada elemento con la clase "instrument"
  document.querySelectorAll(".instrument").forEach(function (instrument) {
    instrument.addEventListener("click", function () {
      // Obtiene la ruta de audio específica para este instrumento
      var audioSrc = this.getAttribute("data-audio");

      // Llama a la función para reproducir el sonido para este instrumento
      playSound(audioSrc);
    });
  });

  // Función para reproducir el sonido para un instrumento específico
  function playSound(audioSrc) {
    // Inicia la reproducción para este instrumento
    var sound = new Howl({
      src: [audioSrc],
    });
    sound.play();
  }
});
