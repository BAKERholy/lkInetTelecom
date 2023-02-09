const tabs = document.querySelectorAll(".detailing-links a");
const tables = document.querySelectorAll(".wrapper-tabel");
const detailingLinks = document.querySelector(".detailing-links");
const backButton = document.querySelectorAll(".back-link");

tabs.forEach((el, i) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    removeAllActiveClasses();
    tables[i].classList.toggle("active");
    detailingLinks.classList.add("not-active");
  });
});

backButton.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    removeAllActiveClasses();
    detailingLinks.classList.remove("not-active");
  });
});

function removeAllActiveClasses() {
  for (const tab of tables) tab.classList.remove("active");
}
