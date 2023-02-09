const navToggle = document.querySelector(".navigation__toggle");
const navList = document.querySelector(".navigation-list");
const nav = document.querySelector(".navigation");

const modalWrapper = document.querySelector(".modal-wrapper");
const backdrop = document.querySelector(".backdrop");

const modalButton = document.querySelector(".show-modal");

const closeModalButton = document.querySelector(".close-modal-button");

modalButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal();
});

closeModalButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal();
});

function toggleModal() {
  modalWrapper.classList.toggle("active");
  backdrop.classList.toggle("active");
}

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide, 2000);
