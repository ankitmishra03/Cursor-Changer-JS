document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("png").addEventListener("click", handler);
});

// The handler also must go in a .js file
function handler() {
  console.log("clicked");
  document.getElementById("png").classList.add("demo");
  //   document.body.style.cursor = "url(pic1.png), pointer";
}
