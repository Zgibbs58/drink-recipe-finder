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
document.querySelector("#rand-card").addEventListener("click", function () {
  window.location = "./results.html";
});
// click events to save values entered in local storage, make modal inactive, and load results page
nameBtn.addEventListener("click", function () {
  var reqName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameInput.value.trim()}`;
  console.log(nameInput.value.trim());
  fetch(reqName)
    .then(function (response) {
      // response status to alert user the data cannot be fetched
      if (response.status !== 200) {
        return alert("Status 404");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data.drinks);
      // data.drinks is null if the drink name does not exis. IF it is null or nothing entered the try again modal is active
      if (data.drinks === null || !nameInput.value) {
        bulmaToast.toast({ message: "Please enter a valid drink name!", type: "is-danger", position: "center" });
        return;
      }
      // if not normal actions taken
      localStorage.setItem("drinkName", JSON.stringify(nameInput.value.trim()));
      nameModal.classList.remove("is-active");
      window.location = "./results.html";
    });
});
ingrBtn.addEventListener("click", function () {
  var reqName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingrInput.value.trim()}`;
  fetch(reqName)
    .then(function (response) {
      JSON.stringify(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.ingredients === null || !ingrInput.value) {
        bulmaToast.toast({ message: "Please enter a valid ingredient name!", type: "is-danger", position: "center" });
        return;
      }
      localStorage.setItem("drinkIngr", JSON.stringify(ingrInput.value.trim()));
      nameModal.classList.remove("is-active");
      window.location = "./results.html";
    });
});
