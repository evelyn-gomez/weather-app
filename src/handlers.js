import { dom } from "./dom";
import { fetchWeather } from "./api";

async function setDefaultLocation(){
  const defaultLocation = "seattle"; 
  const current = await fetchWeather(defaultLocation); 
  console.log(current);
  
  dom.weatherToday.textContent = `${current}`
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
