
const temp = document.querySelector('temp')
const API_KEY = process.env.API_KEY

// API link specific for Lehi Utah using Lon & Lat: 
// This key is also stored in the .env file. Not sure if the const API_KEY is the best way to link it over. 
//API_Key = ed088ac32004347c3513041d87c48e51

// api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.85&appid=ed088ac32004347c3513041d87c48e51



axios.get('api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.85&appid={API_KEY}').then(res =>{

    console.log(res.data)    
    //let weather = res.data.weather
    // let weather = 20


   // temp.appendChild(weather)
})

