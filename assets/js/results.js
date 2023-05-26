// function to fetch based on DRINK NAME
function getDrinkName(inp) {
    var reqName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inp}`;
    fetch(reqName)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
  }

  // function to fetch based on INGREDIENT
  function getIngrName(inp) {
    var reqName = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inp}`;
    fetch(reqName)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
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
    })
  }

