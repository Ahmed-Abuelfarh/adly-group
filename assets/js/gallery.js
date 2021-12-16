// showing nav menu in mobile
let navMenu = document.querySelector(".nav-links"),
  menuIcon = document.querySelector(".menu-icon"),
  closeIcon = document.querySelector(".close-icon");

if (menuIcon) {
  menuIcon.addEventListener("click", function () {
    navMenu.classList.add("active");
  });
}

if (closeIcon) {
  closeIcon.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
}

// preloader
let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.visibility = "hidden";
  loader.style.opacity = "0";
});

//scroll reveal
let sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 0,
  // reset: true,
});

sr.reveal(".gallery-title");
sr.reveal(".gallery-item", { interval: 150 });

// showing scroll up button when scrolling down
function scrollingUp() {
  let scrollUp = document.getElementById("scrollup");

  if (this.scrollY >= 300) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
}
window.addEventListener("scroll", scrollingUp);
