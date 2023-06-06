const url = 'https://api.openweathermap.org/data/2.5/'
const key = '032206e581ab70128ecae17dcaa7493d'
var index = 0
let cityArr = ["Quba","Baku","Şəki","Bərdə","Gəncə","Ağdam","Şamaxı","Astara","Qax","Qubadlı"]
function startApp(){
    getResult(cityArr[index])
    index++
    if(index===cityArr.length){
        index = 0
    }
}
let getResult = (cityName)=>{
    
    let response = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`
    fetch(response)
    .then(weather=>{
        return weather.json()
    })
    .then(displayResult)
}
const displayResult = (result)=>{
    city.innerHTML = `${result.name}, ${result.sys.country}`
    temperature.innerHTML = `${Math.round(result.main.temp)}°C`
    description.innerHTML = `${result.weather[0].description}`
    img.setAttribute("src",`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`)
}
const content = document.querySelector(".content")
let city = document.createElement("div")
city.className = "city"
content.appendChild(city)
let temperature = document.createElement("div")
temperature.className = "temperature";
content.appendChild(temperature);
let imgDiv = document.createElement("div");
imgDiv.className = "img"
content.appendChild(imgDiv)
let img = document.createElement('img');
img.style.scale = "1.5"
imgDiv.appendChild(img);
let description = document.createElement("div")
description.className = "description"
content.appendChild(description)
setInterval(startApp,3000);