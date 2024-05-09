import { dom } from "./dom";
import fetchWeather from "./api"
 
async function setDefaultLocation() {
  const defaultLocation = "seattle";
  const weather = await fetchWeather(defaultLocation);
  const today = weather.currentWeather;
  // const forecast = weather.forecastWeather;
  dom.setCurrent(today);
  dom.reset()
}

function searchLocation() {
  dom.searchButton.addEventListener("click", () => {
    const location = dom.searchInput.value;
    (async () => {
      const weather = await fetchWeather(location);
      const today = weather.currentWeather;
      dom.setCurrent(today);
      dom.reset(); 
    })();
  });
}

const handler = {
  load: () => {
    setDefaultLocation();
    searchLocation();
  },
};

export default handler; 
