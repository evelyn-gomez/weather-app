import { dom } from "./dom";
import { fetchWeather } from "./api";

async function setDefaultLocation(){
  const defaultLocation = "seattle"; 
  const weather = await fetchWeather(defaultLocation); 
  const today = weather.currentWeather; 
  const forecast = weather.forecastWeather; 

  console.log(weather); 
  dom.setToday(today); 
}

function searchLocation(){
  dom.searchButton.addEventListener("click", ()=>{
    const location = dom.searchInput.value;
    fetchWeather(location); 
  })
}

export const handler = {
  load: ()=>{
    setDefaultLocation();
    searchLocation();
  },
  
}
