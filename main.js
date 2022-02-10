const temp = document.querySelector('temp')

// API link specific for Lehi Utah using Lon & Lat: 
// api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.85&appid=ed088ac32004347c3513041d87c48e51

//API_Key = ed088ac32004347c3513041d87c48e51

axios.get('api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.85&appid=ed088ac32004347c3513041d87c48e51').then(res =>{

    console.log(res.data)    
    //let weather = res.data.weather
    // let weather = 20


   // temp.appendChild(weather)
})

