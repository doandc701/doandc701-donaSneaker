const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
if(overlay){
  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });
}


closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// const laythe = document.querySelectorAll(".show-popUp");
// const hienthi = document.querySelector(".modal");
// const lammo= document.querySelector(".overlay")
// const modalContents1 = document.querySelector(".java-popUp");

// function showSucsses() {
//   hienthi.classList.add("active");
//   lammo.classList.add("overlay");
// }

// function hidenSucsses() {
//   hienthi.classList.remove("active");
//   lammo.classList.remove("overlay");

// }
// for (const popUp of laythe) {
//   popUp.addEventListener("click", showSucsses);
// }
// hienthi.addEventListener("click", hidenSucsses);
// modalContents1.addEventListener("click", function (event) {
//   event.stopPropagation();
// });
