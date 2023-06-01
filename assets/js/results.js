var strVid;
// function to fetch based on DRINK NAME
function getDrinkName(inp) {
  var reqName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inp}`;
  fetch(reqName)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      popDrinkData(data);
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
  document.querySelector("#popDrink").setAttribute("style", "display:none");
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
      document.querySelector("#popList").textContent = "";
    });
  });
}

// function to populate RECIPE and drink info fetched by getDrinkName()
function popDrinkData(data) {
  document.querySelector("#popDrink").setAttribute("style", "display:null");
  console.log(data);
  var drinks = data.drinks[0];
  document.querySelector("#drink-img").setAttribute("src", drinks.strDrinkThumb);
  document.querySelector("#drink-name").textContent = drinks.strDrink;
  document.querySelector("#instruct").textContent = drinks.strInstructions;
  
  for (const key in data.drinks[0]) {
    if (/^strIngredient/.test(key) && drinks[key]) {
      var num = key[key.length - 1];
      var liEL = document.createElement("li");
      liEL.textContent = drinks["strMeasure" + num] + " " + drinks["strIngredient" + num];
      document.querySelector("#meas-ingr").append(liEL);
      console.log(drinks["strMeasure" + num] + drinks["strIngredient" + num]);
    }
  }
  
  if (drinks.strVideo !== null) {
    strVid = drinks.strVideo.split("=");
    document.querySelector("#player").setAttribute("src", `https://www.youtube.com/embed/${strVid[1]}`);
    // location.reload();
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
      getDrinkName(data.drinks[0].strDrink);
    });
}

// conditionals to check if local storage has drinkName or drinkIngr and run the correct function based on user input
if (localStorage.getItem("drinkIngr")) {
  getIngrName(JSON.parse(localStorage.getItem("drinkIngr")));
} else if (localStorage.getItem("drinkName")) {
  getDrinkName(JSON.parse(localStorage.getItem("drinkName")));
} else {
  getRandom();
}

// YT API for embedding videos
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: ``,
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}