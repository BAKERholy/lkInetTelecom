const navToggle = document.querySelector(".navigation__toggle");
const navList = document.querySelector(".navigation-list");
const nav = document.querySelector(".navigation");

console.log(navToggle)
navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide, 2000);









