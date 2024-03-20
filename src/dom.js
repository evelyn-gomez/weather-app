class DOM{
  constructor(){
    this.searchInput = document.querySelector(".search-container input");
    this.searchButton = document.querySelector(".search-container button"); 
    this.weatherToday = document.querySelector(".weather-info-today");
    this.weatherLocation = document.querySelector(".location");
    this.weatherTemp = document.querySelector("temp"); 
    this.weatherDescription = document.querySelector(".description"); 
  }

}


export const dom = new DOM(); 
