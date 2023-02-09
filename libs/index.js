const navToggle = document.querySelector(".navigation__toggle");
const navList = document.querySelector(".navigation-list");
const nav = document.querySelector(".navigation");

const tabs = document.querySelectorAll(".detailing-links a");
const tables = document.querySelectorAll(".wrapper-tabel");
const detailingLinks = document.querySelector(".detailing-links");

tabs.forEach((el, i) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    removeAllActiveClasses();
    tables[i].classList.toggle("active");
    detailingLinks.classList.add("not-active");
  });
});

function removeAllActiveClasses() {
  for (const tab of tables) tab.classList.remove("active");
}

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide, 2000);
