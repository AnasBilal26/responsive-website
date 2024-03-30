var button = document.querySelector("button");
var fullscreen = document.querySelector(".fullscreen");
var colour = document.querySelector(".Colourlib");
flag = 0;
button.addEventListener("click", function () {
  if (flag == 0) {
    fullscreen.style.right = 0;
    flag = 1;
    colour.style.opacity = 0;
  } else {
    fullscreen.style.right = "-100%";
    flag = 0;
    colour.style.opacity = 1;
  }
});
var loader = document.querySelector(".loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 3000);
