const lamp = document.getElementById("lamp");
const body = document.getElementById("body");
const path = document.getElementById("path");

lamp.addEventListener("click", () => {
  body.classList.toggle("toogle");
  lamp.classList.toggle("animation");
  path.classList.toggle("yellow");
});
