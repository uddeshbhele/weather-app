
const API_KEY = "3c3e86f21af34eb9ad875308262606";

let city = document.querySelector("#city");
let state = document.querySelector("#state");
let day = document.querySelector("#day");
let time = document.querySelector("#time");
let temp = document.querySelector("#temp");
let condition = document.querySelector("#condition");
let back = document.querySelector("#back");
let image = document.querySelector("#image");
let feelsLike = document.querySelector("#feels-like");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let vis = document.querySelector("#vis");
let pressure = document.querySelector("#pressure");
let search = document.querySelector("#search");

async function api() {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search.value}`,
    );
    const data = await res.json();
    city.innerText = data.location.name;
    state.innerText = data.location.region;

    let date = new Date();
    let todayDay = date.getDay();

    if (todayDay == 1) {
      day.innerText = "Monday";
    } else if (todayDay == 2) {
      day.innerText = "Tuesday";
    } else if (todayDay == 3) {
      day.innerText = "Wednesday";
    } else if (todayDay == 4) {
      day.innerText = "Thursday";
    } else if (todayDay == 5) {
      day.innerText = "Friday";
    } else if (todayDay == 6) {
      day.innerText = "Saturday";
    } else if (todayDay == 7) {
      day.innerText = "Sunday";
    }

    time.innerText = `${date.getHours()} : ${date.getMinutes()}`;
    temp.innerText = data.current.temp_c;
    condition.innerText = data.current.condition.text;

    image.src = data.current.condition.icon.replace("64x64", "128x128");
    feelsLike.innerText = data.current.feelslike_c;
    humidity.innerText = data.current.humidity;
    wind.innerText = data.current.wind_kph;
    vis.innerText = data.current.vis_km;
    pressure.innerText = data.current.pressure_mb;
  } catch (error) {
    console.log(error);
  }
}

setInterval(() => {
  api();
}, 1000);