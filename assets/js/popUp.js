const modals = document.querySelector(".modal");
const btn = document.querySelector(".btn-add");
btn.onclick = function (e) {
  modals.classList.toggle("active");
  setTimeout(function () {
    location.href = "./detail.html";
  }, 1500);
};
