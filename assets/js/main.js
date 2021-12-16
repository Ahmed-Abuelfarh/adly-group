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

//scroll reveal
let sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 0,
  // reset: true,
});

sr.reveal(
  ".services-title, .gallery-title, .clients-title, .clients-swiper, .contact-title"
);
sr.reveal("", { origin: "bottom" });
sr.reveal(".home-content, .about-content, .contact-info", { origin: "left" });
sr.reveal(".home-img-container, .contact-form", { origin: "right" });
sr.reveal(".about-img, .services-box, .gallery-item", { interval: 150 });

// initialize clients swiper
let clientSwiperSwiper = new Swiper(".clients-swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: true,
  loop: "true",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// preloader
let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.visibility = "hidden";
  loader.style.opacity = "0";
});

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
