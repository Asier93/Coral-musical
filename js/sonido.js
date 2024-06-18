document.addEventListener("DOMContentLoaded", function () {
  var sounds = {};

  document.querySelectorAll(".instrument").forEach(function (instrument) {
    instrument.addEventListener("click", function () {
      var audioSrc = this.getAttribute("data-audio");

      playSound(audioSrc);
    });
  });

  // Función para reproducir el sonido para un instrumento específico
  function playSound(audioSrc) {
    var sound = new Howl({
      src: [audioSrc],
    });
    sound.play();
  }
});

AFRAME.registerComponent("stop-on-space", {
  init: function () {
    var el = this.el;

    el.addEventListener("click", function () {
      toggleMusic();
    });

    document.addEventListener("keydown", function (event) {
      if (event.code === "Space") {
        event.preventDefault();
        toggleMusic();
      }
    });
    function toggleMusic() {
      var audioComponents = document.querySelectorAll(".instrument[sound]");

      audioComponents.forEach(function (audio) {
        var soundComponent = audio.components.sound;

        if (soundComponent && soundComponent.isPlaying) {
          soundComponent.pause();
          console.log("Pausando música");
        }
      });
    }
  },
});
