
const myElement = document.getElementById("navtop");


const scrollThreshold = 100;

window.addEventListener("scroll", function() {
  if (window.scrollY >= scrollThreshold) {
    myElement.classList.add("scrollActive");
  } else {
    myElement.classList.remove("scrollActive");
  }
});

  