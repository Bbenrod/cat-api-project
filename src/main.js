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

    const createLikeButton = (cat) => {
      const likeButton = document.createElement("button");
      likeButton.textContent = "Like";
      likeButton.classList.add("like-button");
      likeButton.addEventListener("click", () => {
        saveFavouriteCats(cat.id);
        getFavoriteCats();
      });
      return likeButton;
    };

    setCats(container, data, createLikeButton);
  } catch (error) {
    console.error("Error fetching cat:", error);
  }
};

buttonRandom.addEventListener("click", getRandomCat);

//Favoritos

const API_FAVORITES_URL = API_BASE_URL + "favourites";

const getFavoriteCats = async () => {
  try {
    const res = await fetch(`${API_FAVORITES_URL}?api_key=${API_KEY}`);

    const data = await res.json();

    const container = document.querySelector("#favorites-cats-images");

    // Usar setCats para agregar solo imágenes (sin botón adicional)
    setCats(
      container,
      data.map((cat) => cat.image)
    );

    console.log("Favorites:");
    console.log(data);
  } catch (error) {
    console.error("Error fetching favorite cats:", error);
  }
};

const saveFavouriteCats = async (image_id) => {
  const res = await fetch(`${API_FAVORITES_URL}?api_key=${API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_id,
    }),
  });
};

//Init
(() => {
  getFavoriteCats();
  getRandomCat();
  console.log("Init");
})();

//Utils
const setCats = (container, cats, createButton) => {
  container.innerHTML = ""; // Limpiamos el contenido actual del contenedor

  cats.forEach((cat) => {
    // Creamos un div para cada gato
    const catDiv = document.createElement("div");
    catDiv.classList.add("cat-container");

    // Creamos la imagen del gato
    const img = document.createElement("img");
    img.src = cat.url;
    img.alt = "Cat";
    img.classList.add("cat-image");
    catDiv.appendChild(img);

    // Creamos el botón de like
    if (createButton) catDiv.appendChild(createButton(cat));

    // Agregamos el div del gato al contenedor principal
    container.appendChild(catDiv);
  });
};
