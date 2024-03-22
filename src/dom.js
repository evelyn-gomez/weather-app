class DOM{
  constructor(){
    this.searchInput = document.querySelector(".search-container input");
    this.searchButton = document.querySelector(".search-container button");  
  }

  setToday(weather){
    const todayContainer = document.querySelector(".weather-info-today");
    const locationElem= document.querySelector(".location");
    const lastUpdatedElem = document.querySelector(".last-updated"); 
    const temperatureElem = document.querySelector(".temp "); 
    const descriptionElem = document.querySelector(".description"); 
    const image = document.createElement("img"); 
    // image.src = IMG;
    todayContainer.appendChild(image);
  
  
    const current = weather.current; 
    const location = weather.location; 
    // const currentConditionCode = current.condition.code; 
    locationElem.textContent = `Weather for: ${location.name}`; 
    lastUpdatedElem.textContent = `Last Updated: ${current.last_updated}`
    temperatureElem.textContent = `${current.temp_f} °F`; 
    descriptionElem.textContent = `${current.condition.text}`; 
  }
}


export const dom = new DOM(); 
