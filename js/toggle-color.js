AFRAME.registerComponent("color-interaction", {
  init: function () {
    const el = this.el;

    el.addEventListener("mouseenter", function () {
      el.setAttribute("material", "color", el.getAttribute("data-hover-color"));
    });

    el.addEventListener("mouseleave", function () {
      el.setAttribute(
        "material",
        "color",
        el.getAttribute("data-original-color")
      );
    });
  },
});
