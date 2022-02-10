const temp = document.querySelector(".temp");
const body = document.querySelector("body");
const button = document.querySelector(".button");





const test = () => {
    console.log("test");
  axios.get("https://api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.85&appid=ed088ac32004347c3513041d87c48e51").then((res) => {
    let weather = res.data.weather[0].main;
    // let weather = 20
    console.log(weather);
    
    let text = document.createTextNode(weather)
    temp.appendChild(text)




  });
};

test()

// temp.addEventListener("load", test);
// button.addEventListener("click", test)






// const API_KEY = process.env.API_KEY

// API link specific for Lehi Utah using Lon & Lat:
// This key is also stored in the .env file. Not sure if the const API_KEY is the best way to link it over.
//API_Key = ed088ac32004347c3513041d87c48e51

// api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.85&appid=ed088ac32004347c3513041d87c48e51
