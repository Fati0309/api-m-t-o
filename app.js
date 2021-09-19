const icon =document.querySelector('.image');
const degre =document.querySelector('.degre');
const loc =document.querySelector('.location');
const parg =document.querySelector('.parg');
//......................................
const weather = {};
weather.tem = {
    unit:'celsius'
};

//key api 74be46e5ee6097adebc287b64891b2b6
const KELVIN=273;

const key ='74be46e5ee6097adebc287b64891b2b6';

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition,(err)=>console.log(err));
}else{
    notificationElement.style.display = 'block';
    notificationElement.innerHTML= `<p> Browser does't support Geolocatization</p>`;
}
 function setPosition(position) {
     //console.log(position);
     let latitude = position.coords.latitude;
     let longitude = position.coords.longitude;

    getWeather(latitude,longitude);
 }

 
function getWeather(latitude,longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    fetch(api).then(function (response) {
    let data = response.json();
    return data;
    
})
  
.then(function (data){
    console.log(data);
    weather.tem.value = Math.floor(data.main.temp - KELVIN);
    weather.description=data.weather[0].description;
    weather.iconId= data.weather[0].icon;
    weather.city = data.name;
    weather.country = data.sys.country
    //console.log(weather);
    
})
    .then ( function () {
        displayWeather();
    });
}
function displayWeather(){
    icon.innerHTML = `<img src="images/${weather.iconId}.png"/>`;
    degre.innerHTML =`${weather.tem.value}`;
    loc.innerHTML = `${weather.city},${weather.country}`;
    parg.innerHTML = `${weather.description}`;}
//////////////////////////////////////////////////
var dat = document.getElementById('dat')
 var heur = document.getElementById('heure')
 var MOIS = ["janvier" , "fevrie" , "mars" , "avril" , "mais" , "juin" , "juilet" , "aout" , "septembre" , "octobre" , "novombre" , "decembre"]
 


 var dateGlobale = new Date();

 var heure = dateGlobale.getHours();
 var minu = dateGlobale.getMinutes();
 
 
 
 var jour = dateGlobale.getDate();
 var mois = dateGlobale.getMonth();
 var anne = dateGlobale.getFullYear();


 mois = MOIS[mois-1];

 document.getElementById("dat").innerHTML = jour + " " + mois + " " + anne;
 document.getElementById("heure").innerHTML = heure + " : " + minu ;