var myDATA = [];
var city = document.querySelector("#city");
var currentdeg = document.querySelector("#currentdeg");
var maximum = document.querySelector("#maximum");
var minimum = document.querySelector("#minimum");
var condition =document.querySelector("#condition");
var precip = document.querySelector("#precip");
var humidity = document.querySelector("#humidity");
var wind = document.querySelector("#wind")
var weatherimg = document.querySelector("#weatherimg")
var localtime = document.querySelector("#localtime")
var sunrise = document.querySelector("#sunrise");
var sunset = document.querySelector("#sunset");
var moonrise = document.querySelector("#moonrise");
var moonset = document.querySelector("#moonset")
// var selectcity = document.querySelector("#selectcity")
window.addEventListener("change",()=>{
    var cityselect = document.getElementsByTagName("select")[0].selectedOptions[0].value ;
    fetch('http://api.weatherapi.com/v1/forecast.json?key=cb7565cfb0f74e86a0f155847221912&q='+cityselect+'&days=7&aqi=no&alerts=no')
     .then((response)=> response.json())
     .then((data) =>{
        myDATA = data;
        weatherimg.src = myDATA.current.condition.icon;
        currentdeg.innerHTML = myDATA.current.temp_c + "<sup>o</sup>";
        condition.innerHTML = myDATA.current.condition.text;
        minimum.innerHTML = `Min.: ${myDATA.forecast.forecastday[0].day.mintemp_c}<sup>o</sup>`
        maximum.innerHTML = `Max.: ${myDATA.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>`
        precip.innerHTML = `<img src="./img/noun-rain-2438520 1.png">${myDATA.current.precip_mm}%` ;
        humidity.innerHTML = `<img src="./img/noun-humidity-151847 1.png">${myDATA.current.humidity}%` ;
        wind.innerHTML = `<img src="./img/noun-wind-4507827 1.png">${myDATA.current.wind_kph} km/h` ;
        localtime.innerHTML = myDATA.location.localtime.slice(0,10);
        sunrise.innerHTML = myDATA.forecast.forecastday[0].astro.sunrise;
        sunset.innerHTML = myDATA.forecast.forecastday[0].astro.sunset;
        moonrise.innerHTML = myDATA.forecast.forecastday[0].astro.moonrise;
        moonset.innerHTML = myDATA.forecast.forecastday[0].astro.moonset;
    } );
 })
 window.addEventListener("load",()=>{
    fetch('http://api.weatherapi.com/v1/forecast.json?key=cb7565cfb0f74e86a0f155847221912&q=Baku&days=7&aqi=no&alerts=no')
     .then((response)=> response.json())
     .then((data) =>{
        myDATA = data;
        weatherimg.src = myDATA.current.condition.icon;
        currentdeg.innerHTML = myDATA.current.temp_c + "<sup>o</sup>";
        condition.innerHTML = myDATA.current.condition.text;
        minimum.innerHTML = `Min.: ${myDATA.forecast.forecastday[0].day.mintemp_c}<sup>o</sup>`
        maximum.innerHTML = `Max.: ${myDATA.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>`
        precip.innerHTML = `<img src="./img/noun-rain-2438520 1.png">${myDATA.current.precip_mm}%` ;
        humidity.innerHTML = `<img src="./img/noun-humidity-151847 1.png">${myDATA.current.humidity}%` ;
        wind.innerHTML = `<img src="./img/noun-wind-4507827 1.png">${myDATA.current.wind_kph} km/h` ;
        localtime.innerHTML = myDATA.location.localtime.slice(0,10);
        sunrise.innerHTML = myDATA.forecast.forecastday[0].astro.sunrise;
        sunset.innerHTML = myDATA.forecast.forecastday[0].astro.sunset;
        moonrise.innerHTML = myDATA.forecast.forecastday[0].astro.moonrise;
        moonset.innerHTML = myDATA.forecast.forecastday[0].astro.moonset;
    } );
 })