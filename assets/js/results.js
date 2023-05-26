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
        JSON.stringify(response);
      return response.json();
    })
    .then(function (data) {
    //   console.log(data);
    popList(data);
})
}

// function to populate list created by getIngrName()
function popList(data) {
    console.log(data);
    var ulEl = document.querySelector("#popList");
    for (let i = 0; i < data.drinks.length; i++) {
        var liEl = document.createElement("div");
        var txtEl = document.createElement("p");
        liEl.setAttribute("class", "box has-text-centered m-5");
        txtEl.setAttribute("class", "content is-small");
        liEl.innerHTML = `<img width="128" height="128" src=${data.drinks[i].strDrinkThumb}>`;
        txtEl.innerHTML = `${data.drinks[i].strDrink}`;
        ulEl.append(liEl);
        liEl.append(txtEl);
    }
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


// test function run
getRandom();