document.addEventListener("DOMContentLoaded", function () {
  var caja = document.querySelector("a-box");
  var sound = null;

  caja.addEventListener("click", function () {
    toggleSound();
  });

  function toggleSound() {
    if (sound) {
      sound.stop();
      sound.seek(0);
    }

    sound = new Howl({
      src: ["./assets/audio/pentatonica.mp3"],
    });
    sound.play();
  }
});
