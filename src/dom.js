export class DOM {
  constructor() {
    this.searchInput = document.querySelector(".search-container input");
    this.searchButton = document.querySelector(".search-container button");
  }

  // eslint-disable-next-line class-methods-use-this
  setCurrent(weather) {
    const todayContainer = document.querySelector(".weather-info-today");
    const locationElem = document.querySelector(".location");
    const lastUpdatedElem = document.querySelector(".last-updated");
    const temperatureElem = document.querySelector(".temp ");
    const descriptionElem = document.querySelector(".description");
    const image = document.querySelector(".current-icon");

    const {current} = weather;
    const {location} = weather;

    locationElem.textContent = `Weather for: ${location.name}, ${location.region}`;
    lastUpdatedElem.textContent = `Last Updated: ${current.last_updated}`;
    temperatureElem.textContent = `${current.temp_f} °F`;
    descriptionElem.textContent = `${current.condition.text}`;

    console.log(location)

    image.src = current.condition.icon.toString();
    image.alt = current.condition.text.toString();
    todayContainer.appendChild(image);
  }

  reset(){
    if(this.searchInput.value !== ""){
      this.searchInput.value = ""; 
    } 
  }
  // setForecast(weat){

  // }
}

export const dom = new DOM(); 
