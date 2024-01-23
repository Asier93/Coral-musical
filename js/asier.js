document.addEventListener("DOMContentLoaded", function () {
  var caja = document.querySelector("a-box");
  var sound = null; // Variable para almacenar el objeto Howl

  // Agrega un evento de clic a la caja
  caja.addEventListener("click", function () {
    // Llama a la función para reproducir o detener el sonido
    toggleSound();
  });

  // Función para reproducir o detener el sonido
  function toggleSound() {
    if (sound) {
      // Si hay un sonido en reproducción, detén y reinicia
      sound.stop();
      sound.seek(0); // Vuelve al inicio del sonido
    }

    // Inicia la reproducción
    sound = new Howl({
      src: ["./assets/audio/pentatonica.mp3"],
    });
    sound.play();
  }
});

  