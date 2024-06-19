const API_KEY =
  "live_2KxgGFh3LyBGO3AI2SorYLHqpd9S8RLDg2NO0JZuR46B02ZxDvw7tnwSaf0VHOaR";
const URL = "https://api.thecatapi.com/v1/images/search?limit=3";
const imgContainer1 = document.querySelector("#img1");
const imgContainer2 = document.querySelector("#img2");
const imgContainer3 = document.querySelector("#img3");
const buttonContainer = document.querySelector("button");

const getCat = async () => {
  console.log("Start");

  try {
    const res = await fetch(`${URL}&api_key=${API_KEY}`);
    const data = await res.json();
    console.log(data);

    imgContainer1.src = data[0].url;
    imgContainer2.src = data[1].url;
    imgContainer3.src = data[2].url;

    console.log("End");
  } catch (error) {
    console.error("Error fetching cat:", error);
  }
};

getCat();

buttonContainer.addEventListener("click", getCat);
