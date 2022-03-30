const menushow = document.querySelectorAll(".show-menu");
const modals1 = document.querySelector(".navgation");
const modalContents = document.querySelector(".javas-navgation");

function showMenu() {
  modals1.classList.add("navgation_show");
}

function hidenMenu() {
  modals1.classList.remove("navgation_show");
}
for (const Menu of menushow) {
  Menu.addEventListener("click", showMenu);
}
modals1.addEventListener("click", hidenMenu);
modalContents.addEventListener("click", function (event) {
  event.stopPropagation();
});
