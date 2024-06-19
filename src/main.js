const API_KEY =
  "live_2KxgGFh3LyBGO3AI2SorYLHqpd9S8RLDg2NO0JZuR46B02ZxDvw7tnwSaf0VHOaR";
const API_BASE_URL = "https://api.thecatapi.com/v1/";

//Random Cats
const API_RANDOM_URL = API_BASE_URL + "images/search";

const buttonRandom = document.querySelector("#button-random");

const getRandomCat = async () => {
  try {
    const res = await fetch(`${API_RANDOM_URL}?limit=3&api_key=${API_KEY}`);
    const data = await res.json();

    const container = document.querySelector("#random-cats-images");

    container.innerHTML = "";

    data.forEach((cat) => {
      const img = document.createElement("img");
      img.src = cat.url;
      img.alt = "Cat";
      img.classList.add("cat-image");
      container.appendChild(img);
    });

    console.log(data);
  } catch (error) {
    console.error("Error fetching cat:", error);
  }
};

getRandomCat();

buttonRandom.addEventListener("click", getRandomCat);

//Favoritos

const API_FAVORITES_URL = API_BASE_URL + "favourites";

const getFavoriteCats = async () => {
  try {
    const res = await fetch(`${API_FAVORITES_URL}?api_key=${API_KEY}`);
    // const res = await fetch(
    //   `https://api.thecatapi.com/v1/favourites?api_key=${API_KEY}`
    // );
    const data = await res.json();

    const container = document.querySelector("#favorites-cats-images");

    container.innerHTML = "";

    data.forEach((cat) => {
      const img = document.createElement("img");
      img.src = cat.url;
      img.alt = "Cat";
      img.classList.add("cat-image");
      container.appendChild(img);
    });

    console.log(data);
  } catch (error) {
    console.error("Error fetching favorite cats:", error);
  }
};

getFavoriteCats();
