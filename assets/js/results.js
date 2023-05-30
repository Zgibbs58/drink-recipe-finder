// function to fetch based on DRINK NAME
function getDrinkName(inp) {
  var reqName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inp}`;
  fetch(reqName)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      popList(data);
    });
}

// function to fetch based on INGREDIENT
function getIngrName(inp) {
  var reqName = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inp}`;
  fetch(reqName)
    .then(function (response) {
      JSON.stringify(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      popList(data);
    });
}

// function to populate list created by getIngrName()
function popList(data) {
  console.log(data);
  var ulEl = document.querySelector("#popList");
  data.drinks.forEach((drink) => {
    liEl = document.createElement("div");
    txtEl = document.createElement("p");
    liEl.setAttribute("class", "box has-text-centered m-5");
    liEl.setAttribute("id", `${drink.strDrink}`);
    txtEl.setAttribute("class", "content is-small");
    txtEl.setAttribute("id", `${drink.strDrink}`);
    liEl.innerHTML = `<img id="${drink.strDrink}" width="128" height="128" src=${drink.strDrinkThumb}>`;
    txtEl.innerHTML = `${drink.strDrink}`;
    ulEl.append(liEl);
    liEl.append(txtEl);
    liEl.addEventListener("click", function (event) {
      getDrinkName(event.target.id);
      // move below line to getDrinkName function if issues rendering drink name page
      document.querySelector("#popList").textContent = "";
    });
  });
}

// function to fetch RANDOM
function getRandom() {
  var reqName = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  fetch(reqName)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

// conditionals to check if local storage has drinkName or drinkIngr and run the correct function based on user input
if (localStorage.getItem("drinkIngr")) {
  getIngrName(JSON.parse(localStorage.getItem("drinkIngr")));
} else if (localStorage.getItem("drinkName")) {
  getDrinkName(JSON.parse(localStorage.getItem("drinkName")));
}
// else {randDrink()}
// test function run
// getIngrName(JSON.parse(localStorage.getItem("drinkIngr")));
// console.log(JSON.parse(localStorage.getItem("drinkIngr")));
