let getLocation = document.getElementById("city-location");

let todayDay = document.querySelector('.today .day')
let todayDate = document.querySelector('.today .date')
let todayCity = document.querySelector('.today .city')
let todayDegree = document.querySelector(".today .degree");
let todayIcon = document.querySelector(".today .icon");
let todayInfo = document.querySelector(".today .info");

let tomorrowDay = document.querySelector("#tomorrow .head .day");
let tomorrowIcon = document.querySelector("#tomorrow .body .icon");
let tomorrowDegree = document.querySelector("#tomorrow .body .degree");
let tomorrowDegreeC = document.querySelector("#tomorrow .body .degree-c");
let tomorrowInfo = document.querySelector("#tomorrow .body .info");

let afterTomorrowDay = document.querySelector("#after-tomorrow .head .day");
let afterTomorrowIcon = document.querySelector("#after-tomorrow .body .icon");
let afterTomorrowDegree = document.querySelector("#after-tomorrow .body .degree");
let afterTomorrowDegreeC = document.querySelector("#after-tomorrow .body .degree-c");
let afterTomorrowInfo = document.querySelector("#after-tomorrow .body .info");


// get day
let day = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
][new Date().getDay()];

let tomorrow = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
][new Date().getDay()+1];

let afterTomorrow = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
][new Date().getDay()+2 ];

// push days

todayDay.innerHTML = day;
tomorrowDay.innerHTML = tomorrow;
afterTomorrowDay.innerHTML = afterTomorrow;


async function getWeather() {
  try {
    let result = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b85acf54844f4e18bb5205153240812&q=${getLocation.value}&days=3&aqi=no&alerts=no`);
    let data = await result.json();
    console.log(data);
    // today
    todayIcon.firstChild.setAttribute("src",`https:${data.current.condition.icon}`);
    todayDegree.innerHTML = data.current.heatindex_c;
    todayCity.innerHTML = data.location.name;
    todayInfo.innerHTML = data.current.condition.text;
    // tomorrow
    console.log(data.forecast.forecastday[0].day.maxtemp_c);
    tomorrowDegree.innerHTML = data.forecast.forecastday[0].day.avgtemp_c
    tomorrowDegreeC.innerHTML = data.forecast.forecastday[0].day.avgtemp_f
    tomorrowInfo.innerHTML = data.forecast.forecastday[0].day.condition.text
    tomorrowIcon.firstChild.setAttribute("src",`https:${data.forecast.forecastday[0].day.condition.icon}`);
    // after tomorrow
    afterTomorrowDegree.innerHTML = data.forecast.forecastday[1].day.avgtemp_c
    afterTomorrowDegreeC.innerHTML = data.forecast.forecastday[1].day.avgtemp_f;
    afterTomorrowInfo.innerHTML = data.forecast.forecastday[1].day.condition.text
    afterTomorrowIcon.firstChild.setAttribute("src",`https:${data.forecast.forecastday[1].day.condition.icon}`);
  } catch (err) {
    console.log(err);
  }
}


async function defaultWeather() {
  try {
    let result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=b85acf54844f4e18bb5205153240812&q=Palestine&days=3&aqi=no&alerts=no`
    );
    let data = await result.json();
    console.log(data);
    // today
    todayIcon.firstChild.setAttribute("src",`https:${data.current.condition.icon}`);
    todayDegree.innerHTML = data.current.heatindex_c;
    todayCity.innerHTML = data.location.name;
    todayInfo.innerHTML = data.current.condition.text;
    // tomorrow
    console.log(data.forecast.forecastday[0].day.maxtemp_c);
    tomorrowDegree.innerHTML = data.forecast.forecastday[0].day.avgtemp_c
    tomorrowDegreeC.innerHTML = data.forecast.forecastday[0].day.avgtemp_f
    tomorrowInfo.innerHTML = data.forecast.forecastday[0].day.condition.text
    tomorrowIcon.firstChild.setAttribute("src",`https:${data.forecast.forecastday[0].day.condition.icon}`);
    // after tomorrow
    afterTomorrowDegree.innerHTML = data.forecast.forecastday[1].day.avgtemp_c
    afterTomorrowDegreeC.innerHTML = data.forecast.forecastday[1].day.avgtemp_f;
    afterTomorrowInfo.innerHTML = data.forecast.forecastday[1].day.condition.text
    afterTomorrowIcon.firstChild.setAttribute("src",`https:${data.forecast.forecastday[1].day.condition.icon}`);
  } catch (err) {
    console.log(err);
  }
}
defaultWeather();

    // just test we had a copy
    getLocation.addEventListener("keypress", function (e) {
      console.log(e.target.value);
      getWeather();
    });