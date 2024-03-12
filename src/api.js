const weather = {
  apiKey: "9b80e0ff9b8349449c4181957231212",
  apiURL:  "http://api.weatherapi.com/v1/", 
  data: {
    location: {
      name: String,
      region: String,
      country: String ,
      lat: "lat",
      lon:"lon",
      "tz_id": "Europe/London",
      "localtime_epoch": 1709073284,
      "localtime": "2024-02-27 22:34"
    }
  }
}
// {
//   "location": {
//       "name": "London",
//       "region": "City of London, Greater London",
//       "country": "United Kingdom",
//       "lat": 51.52,
//       "lon": -0.11,
//       "tz_id": "Europe/London",
//       "localtime_epoch": 1710264706,
//       "localtime": "2024-03-12 17:31"
//   },
//   "current": {
//       "last_updated_epoch": 1710264600,
//       "last_updated": "2024-03-12 17:30",
//       "temp_c": 14.0,
//       "temp_f": 57.2,
//       "is_day": 1,
//       "condition": {
//           "text": "Partly cloudy",
//           "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
//           "code": 1003
//       },
//       "wind_mph": 15.0,
//       "wind_kph": 24.1,
//       "wind_degree": 260,
//       "wind_dir": "W",
//       "pressure_mb": 1010.0,
//       "pressure_in": 29.83,
//       "precip_mm": 0.01,
//       "precip_in": 0.0,
//       "humidity": 88,
//       "cloud": 50,
//       "feelslike_c": 12.8,
//       "feelslike_f": 55.0,
//       "vis_km": 10.0,
//       "vis_miles": 6.0,
//       "uv": 3.0,
//       "gust_mph": 15.9,
//       "gust_kph": 25.5,
//       "air_quality": {
//           "co": 237.0,
//           "no2": 15.6,
//           "o3": 49.4,
//           "so2": 4.7,
//           "pm2_5": 1.9,
//           "pm10": 2.4,
//           "us-epa-index": 1,
//           "gb-defra-index": 1
//       }
//   }
// }


export async function fetchWeather(location) {
  const url = `${weather.apiURL}current.json?key=${weather.apiKey}&q=${location}&aqi=yes`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error); // More specific error type
    }

    console.log(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}
