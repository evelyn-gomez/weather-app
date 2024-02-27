console.log("hello mundo");
const main = document.querySelector(".main");
const searchContainer = document.querySelector(".search-container"); 
const searchInput = document.querySelector(".search-container input");
const searchButton = document.querySelector(".search-container button"); 

const apiKey = "9b80e0ff9b8349449c4181957231212";
const apiURL =  "http://api.weatherapi.com/v1/";

searchButton.addEventListener("click", ()=>{
  const location = searchInput.value; 
  
  if(location){
    fetchWeather(location);
  }else{
    console.log("empty -- need city name or zipcode"); 
  }
})

function fetchWeather(location){
  const url = `${apiURL}current.json?key=${apiKey}&q=${location}&aqi=yes`; 

  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    if (data.error) {
      throw data.error
    }
    console.log(data);
  })
  .catch(error => console.log(error))
}
