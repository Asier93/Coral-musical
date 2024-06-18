AFRAME.registerComponent("color-interaction", {
  init: function () {
    this.el.sceneEl.addEventListener("loaded", () => {
      this.setupEventListeners();
    });
  },

  setupEventListeners: function () {
    const el = this.el;

    el.addEventListener("mouseenter", () => {
      this.handleMouseEnter();
    });

    el.addEventListener("mouseleave", () => {
      this.handleMouseLeave();
    });

    el.addEventListener("click", () => {
      this.handleClick();
    });
  },

  handleMouseEnter: function () {
    const el = this.el;
    const hoverColor = el.getAttribute("data-hover-color");

    const cursorRing = document.querySelector("#cursorRing");
    cursorRing.setAttribute(
      "animation",
      "property: scale; to: 0.04 0.04 0.04; loop: true; dur: 1000"
    );

    this.colorTimeout = setTimeout(() => {
      el.setAttribute("material", "color", hoverColor);
      cursorRing.removeAttribute("animation");
    }, 2000);
  },

  handleMouseLeave: function () {
    const el = this.el;
    const originalColor = el.getAttribute("color");

    clearTimeout(this.colorTimeout);

    el.setAttribute("material", "color", originalColor);

    const cursorRing = document.querySelector("#cursorRing");
    cursorRing.removeAttribute("animation");
  },

  handleClick: function () {
    const el = this.el;
    const clickColor = el.getAttribute("data-click-color");
    el.setAttribute("material", "color", clickColor);

    const sound = el.components.sound;

    if (sound && !sound.isPlaying) {
      sound.playSound();
    }
  },
});
