const weatherAPI = {
  KEY: "9b80e0ff9b8349449c4181957231212",
  URL: "http://api.weatherapi.com/v1/",
};

function throwWeatherDataError(currentWeatherError, forecastWeatherError) {
  if (currentWeatherError) {
    throw new Error(currentWeatherError); // need specific error type
  } else {
    // need specific error type
    throw new Error(forecastWeatherError); 
  }
}

function getForecastForDays(days) {
  const daysLength = days.length;
  const forecastDaysArr = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < daysLength; i++) {
    const forecastDay = {
      date: days[i].date,
      day: {
        maxtemp_c: days[i].day.maxtemp_c,
        maxtemp_f: days[i].day.maxtemp_f,
        mintemp_c: days[i].day.mintemp_c,
        mintemp_f: days[i].day.mintemp_f,
      },
      astro: {
        is_moon_up: days[i].astro.is_moon_up,
        is_sun_up: days[i].astro.is_sun_up,
      },
    };
    forecastDaysArr.push(forecastDay);
  }

  return forecastDaysArr;
}

function storeData(currentData, forecastData) {
  // console.log(`json data - current: ${}, forecast: ${}`)
  const currentWeather = {
    location: {
      name: currentData.location.name.toString(),
      region: currentData.location.region.toString(),
      country: currentData.location.country.toString(),
    },
    current: {
      last_updated: currentData.current.last_updated,
      temp_f: currentData.current.temp_f,
      temp_c: currentData.current.temp_c,
      is_day: currentData.current.is_day,
      condition: {
        text: currentData.current.condition.text,
        icon: currentData.current.condition.icon,
        code: currentData.current.condition.code,
      },
      wind_mph: currentData.current.wind_mph,
      wind_kph: currentData.current.wind_kph,
      humidity: currentData.current.humidity,
      cloud: currentData.current.cloud,
      feelslike_c: currentData.current.feelslike_c,
      feelslike_f: currentData.current.feelslike_f,
      uv: currentData.current.uv,
      gust_mph: currentData.current.mph,
      gush_kph: currentData.current.kph,
      air_quality: {
        co: currentData.current.air_quality.co,
        no2: currentData.current.air_quality.no2,
        o3: currentData.current.air_quality.o3,
        so2: currentData.current.air_quality.so2,
      },
    },
  };
  const forecastWeather = {
    forecast: {
      forecastday: getForecastForDays(forecastData.forecast.forecastday),
    },
  };

  return { currentWeather, forecastWeather };
}

// eslint-disable-next-line func-names, consistent-return
export default async function(location) {
  const currentWeatherURL = `${weatherAPI.URL}current.json?key=${weatherAPI.KEY}&q=${location}&aqi=yes`;
  const forecastWeatherURL = `${weatherAPI.URL}forecast.json?key=${weatherAPI.KEY}&q=${location}&days=3&aqi=yes&alerts=no`;

  try {
    const currentWeatherResponse = await fetch(currentWeatherURL, {
      mode: "cors",
    });
    const forecastWeatherResponse = await fetch(forecastWeatherURL, {
      mode: "cors",
    });

    const currentWeatherData = await currentWeatherResponse.json();
    const forecastWeatherData = await forecastWeatherResponse.json();

    if (currentWeatherData.error || forecastWeatherData.error) {
      throwWeatherDataError(
        currentWeatherData.error,
        forecastWeatherData.error,
      );
    }

    return storeData(currentWeatherData, forecastWeatherData);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}
