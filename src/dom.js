class DOM{
  constructor(){
    this.searchInput = document.querySelector(".search-container input");
    this.searchButton = document.querySelector(".search-container button"); 
  }


  setCurrent(weather){
    const todayContainer = document.querySelector(".weather-info-today");
    const locationElem= document.querySelector(".location");
    const lastUpdatedElem = document.querySelector(".last-updated"); 
    const temperatureElem = document.querySelector(".temp "); 
    const descriptionElem = document.querySelector(".description"); 
    const image = document.querySelector(".current-icon"); 

    const current = weather.current; 
    const location = weather.location; 
    
    locationElem.textContent = `Weather for: ${location.name}`; 
    lastUpdatedElem.textContent = `Last Updated: ${current.last_updated}`
    temperatureElem.textContent = `${current.temp_f} °F`; 
    descriptionElem.textContent = `${current.condition.text}`; 
    
    image.src = current.condition.icon.toString(); 
    image.alt = current.condition.text.toString(); 
    todayContainer.appendChild(image);
  }

  // setForecast(weat){

  // }
}


export const dom = new DOM(); 
