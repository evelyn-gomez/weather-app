import { dom } from "./dom";
import { fetchWeather } from "./api";

function setDefaultLocation(){
  const defaultLocation = "seattle"; 
  fetchWeather(defaultLocation); 
  return; 
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
