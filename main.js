const temp = document.querySelector(".temp");
const Key = "ed088ac32004347c3513041d87c48e51";

//Below not needed unlesss running off a server
// require('dotenv').config()
// const API_KEY = process.env.API_KEY;

const test = () => {
  console.log("test");
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.85&appid=${Key}`
    )
    .then((res) => {
      let weather = res.data.weather[0].main;
      console.log(weather);

      let text = document.createTextNode(weather);
      temp.appendChild(text);
    });
};
test();

// temp.addEventListener("load", test);
// button.addEventListener("click", test)

// API link specific for Lehi Utah using Lon & Lat:
// This key is also stored in the .env file. Not sure if the const API_KEY is the best way to link it over.
//API_Key = ed088ac32004347c3513041d87c48e51

// api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.85&appid=ed088ac32004347c3513041d87c48e51
