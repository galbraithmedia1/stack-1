const temp = document.querySelector('temp')

//key or 3b04a5f822a9e727a4a0a5847fa0f167
axios.get('api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=ed088ac32004347c3513041d87c48e51').then(res =>{

   // let weather = res.data.weather
    let weather = 20


    temp.appendChild(weather)
})

