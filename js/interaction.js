AFRAME.registerComponent("color-interaction", {
    init: function () {
      this.el.sceneEl.addEventListener('loaded', () => {
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
  
      // Start the loading animation
      const cursorRing = document.querySelector('#cursorRing');
      cursorRing.setAttribute('animation', 'property: scale; to: 0.04 0.04 0.04; loop: true; dur: 1000');
  
      // Delay the color change by 2 seconds (2000 milliseconds)
      this.colorTimeout = setTimeout(() => {
        el.setAttribute("material", "color", hoverColor);
        // Stop the loading animation after color change
        cursorRing.removeAttribute('animation');
      }, 2000);
    },
  
    handleMouseLeave: function () {
      const el = this.el;
      const originalColor = el.getAttribute("color");
  
      // Clear the timeout to prevent the color from changing if the mouse leaves before 2 seconds
      clearTimeout(this.colorTimeout);
  
      el.setAttribute("material", "color", originalColor);
  
      // Stop the loading animation if it's still running
      const cursorRing = document.querySelector('#cursorRing');
      cursorRing.removeAttribute('animation');
    },
  
    handleClick: function () {
      const el = this.el;
      const clickColor = el.getAttribute("data-click-color");
      el.setAttribute("material", "color", clickColor);
  
      // Get the sound component
      const sound = el.components.sound;
  
      // If the sound component exists and the sound is not already playing, play the sound
      if (sound && !sound.isPlaying) {
        sound.playSound();
      }
    },
  });
  