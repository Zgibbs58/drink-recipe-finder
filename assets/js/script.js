// following second 2 lines delete local storage upon reload of main page so values are reset for results page
localStorage.removeItem("drinkName");
localStorage.removeItem("drinkIngr");
var nameModal = document.querySelector("#name-modal");
var ingrModal = document.querySelector("#ingr-modal");
// added new variables for button and inputs
var nameInput = document.querySelector("#name-input");
var ingrInput = document.querySelector("#ingr-input");
var nameBtn = document.querySelector("#name-conjure-btn");
var ingrBtn = document.querySelector("#ingr-conjure-btn");

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
// click events to save values entered in local storage, make modal inactive, and load results page
nameBtn.addEventListener("click", function () {
  localStorage.setItem("drinkName", JSON.stringify(nameInput.value));
  nameModal.classList.remove("is-active");
  window.location = "./results.html";
});
ingrBtn.addEventListener("click", function () {
  localStorage.setItem("drinkIngr", JSON.stringify(ingrInput.value));
  ingrModal.classList.remove("is-active");
  window.location = "./results.html";
});
