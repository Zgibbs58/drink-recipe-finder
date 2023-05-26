var nameModal = document.querySelector("#name-modal");
var ingrModal = document.querySelector("#ingr-modal");

document.querySelector("#name-card").addEventListener("click", function () {
  nameModal.classList.add("is-active");
});
document.querySelector("#name-close").addEventListener("click", function () {
  nameModal.classList.remove("is-active");
});

document.querySelector("#ingr-card").addEventListener("click", function () {
  ingrModal.classList.add("is-active");
});
document.querySelector("#ingr-close").addEventListener("click", function () {
  ingrModal.classList.remove("is-active");
});
