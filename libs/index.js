const navToggle = document.querySelector(".navigation__toggle");
const navList = document.querySelector(".navigation-list");
const nav = document.querySelector(".navigation");


navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.toggle("active");
  navToggle.classList.toggle("active");

});



