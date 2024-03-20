/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)\n/* harmony export */ });\n/* harmony import */ var _assets_weather_conditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/weather_conditions */ \"./src/assets/weather_conditions.js\");\n\n\nconst weatherConditionsHeader = _assets_weather_conditions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].slice(0,1); \nconst weatherConditionsOnly = _assets_weather_conditions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].slice(1); \n\nconst weatherAPI = {\n  KEY: \"9b80e0ff9b8349449c4181957231212\",\n  URL:  \"http://api.weatherapi.com/v1/\", \n};\n\nfunction throwWeatherDataError(currentWeatherError, forecastWeatherError){\n  if(currentWeatherError){\n    throw new Error(currentWeatherError); // need specific error type\n  }else{\n    throw new Error(forecastWeatherError); //need specific error type \n  }\n}\n\nfunction getForecastForDays(days){\n  const daysLength = days.length; \n  let forecastDaysArr =[]; \n\n  for(let i=0; i < daysLength; i++){\n    let forecastDay = {\n      date: days[i].date,\n      day: {\n        maxtemp_c: days[i].day.maxtemp_c,\n        maxtemp_f: days[i].day.maxtemp_f, \n        mintemp_c: days[i].day.mintemp_c, \n        mintemp_f: days[i].day.mintemp_f,\n      },\n      astro:{\n        is_moon_up: days[i].astro.is_moon_up, \n        is_sun_up: days[i].astro.is_sun_up,       \n      }\n    }\n    forecastDaysArr.push(forecastDay); \n  }\n\n  return forecastDaysArr; \n}\n\nfunction  storeData(currentData, forecastData){\n  const currentWeather = {\n    location: {\n      name: ()=>{\n        // ideally would make sure all properties of \n        if(currentData.location.name === typeof String){\n          location.name = currentData.location.name; \n        }else{\n          throw Error(\"not a string\"); \n        }\n      }, \n      region: currentData.location.region,\n      country: currentData.location.country ,\n    },\n    current:{\n      last_updated: currentData.current.last_updated, \n      temp_f: currentData.current.temp_f,\n      temp_c: currentData.current.temp_c,\n      is_day: currentData.current.is_day,\n      condition: {\n        text: currentData.current.condition.text,\n        icon: currentData.current.condition.icon,\n        code: currentData.current.condition.code, \n      },\n      wind_mph: currentData.current.wind_mph,\n      wind_kph: currentData.current.wind_kph, \n      humidity: currentData.current.humidity,\n      cloud: currentData.current.cloud,\n      feelslike_c: currentData.current.feelslike_c, \n      feelslike_f: currentData.current.feelslike_f, \n      humidity: currentData.current.humidity,\n      uv: currentData.current.uv,\n      gust_mph: currentData.current.mph, \n      gush_kph: currentData.current.kph, \n      air_quality: {\n        co: currentData.current.air_quality.co, \n        no2: currentData.current.air_quality.no2,\n        o3: currentData.current.air_quality.o3, \n        so2: currentData.current.air_quality.so2, \n      }\n    }\n  }\n\n  const forecastWeather = {\n    forecast: {\n      forecastday: getForecastForDays(forecastData.forecast.forecastday),\n    }\n  }\n  console.log(currentWeather,forecastWeather); \n  return {currentWeather, forecastWeather}; \n}\n\n\nasync function fetchWeather(location) {\n  const currentWeatherURL = `${weatherAPI.URL}current.json?key=${weatherAPI.KEY}&q=${location}&aqi=yes`;\n  const forecastWeatherURL = `${weatherAPI.URL}forecast.json?key=${weatherAPI.KEY}&q=${location}&days=3&aqi=yes&alerts=no`; \n\n  try {\n    const currentWeatherResponse = await fetch(currentWeatherURL,  { mode: \"cors\" });\n    const forecastWeatherResponse = await fetch(forecastWeatherURL,  { mode: \"cors\" }); \n\n    const currentWeatherData = await currentWeatherResponse.json();\n    const forecastWeatherData = await forecastWeatherResponse.json(); \n\n    if(currentWeatherData.error || forecastWeatherData.error) {\n      throwWeatherDataError(currentWeatherData.error, forecastWeatherData.error)\n    }\n\n    return storeData(currentWeatherData, forecastWeatherData); \n  } catch(error) {\n    console.error(\"Error fetching weather:\", error);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/api.js?");

/***/ }),

/***/ "./src/assets/weather_conditions.js":
/*!******************************************!*\
  !*** ./src/assets/weather_conditions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n  ['code','day','night','icon'],\n  [1000,'Sunny','Clear',113],\n  [1003,\"Partly cloudy\",\"Partly cloudy\",116],\n  [1006,'Cloudy','Cloudy',119],\n  [1009,'Overcast','Overcast',122],\n  [1030,'Mist','Mist',143],\n  [1063,\"Patchy rain possible\",\"Patchy rain possible\",176],\n  [1066,\"Patchy snow possible\",\"Patchy snow possible\",179],\n  [1069,\"Patchy sleet possible\",\"Patchy sleet possible\",182],\n  [1072,\"Patchy freezing drizzle possible\",\"Patchy freezing drizzle possible\",185],\n  [1087,\"Thundery outbreaks possible\",\"Thundery outbreaks possible\",200],\n  [1114,\"Blowing snow\",\"Blowing snow\",227],\n  [1117,\"Blizzard\",\"Blizzard\",230],\n  [1135,\"Fog\",\"Fog\",248],\n  [1147,\"Freezing fog\",\"Freezing fog\",260],\n  [1150,\"Patchy light drizzle\",\"Patchy light drizzle\",263],\n  [1153,\"Light drizzle\",\"Light drizzle\",266],\n  [1168,\"Freezing drizzle\",\"Freezing drizzle\",281],\n  [1171,\"Heavy freezing drizzle\",\"Heavy freezing drizzle\",284],\n  [1180,\"Patchy light rain\",\"Patchy light rain\",293],\n  [1183,\"Light rain\",\"Light rain\",296],\n  [1186,\"Moderate rain at times\",\"Moderate rain at times\",299],\n  [1189,\"Moderate rain\",\"Moderate rain\",302],\n  [1192,\"Heavy rain at times\",\"Heavy rain at times\",305],\n  [1195,\"Heavy rain\",\"Heavy rain\",308],\n  [1198,\"Light freezing rain\",\"Light freezing rain\",311],\n  [1201,\"Moderate or heavy freezing rain\",\"Moderate or heavy freezing rain\",314],\n  [1204,\"Light sleet\",\"Light sleet\",317],\n  [1207,\"Moderate or heavy sleet\",\"Moderate or heavy sleet\",320],\n  [1210,\"Patchy light snow\",\"Patchy light snow\",323],\n  [1213,\"Light snow\",\"Light snow\",326],\n  [1216,\"Patchy moderate snow\",\"Patchy moderate snow\",329],\n  [1219,\"Moderate snow\",\"Moderate snow\",332],\n  [1222,\"Patchy heavy snow\",\"Patchy heavy snow\",335],\n  [1225,\"Heavy snow\",\"Heavy snow\",338],\n  [1237,\"Ice pellets\",\"Ice pellets\",350],\n  [1240,\"Light rain shower\",\"Light rain shower\",353],\n  [1243,\"Moderate or heavy rain shower\",\"Moderate or heavy rain shower\",356],\n  [1246,\"Torrential rain shower\",\"Torrential rain shower\",359],\n  [1249,\"Light sleet showers\",\"Light sleet showers\",362],\n  [1252,\"Moderate or heavy sleet showers\",\"Moderate or heavy sleet showers\",365],\n  [1255,\"Light snow showers\",\"Light snow showers\",368],\n  [1258,\"Moderate or heavy snow showers\",\"Moderate or heavy snow showers\",371],\n  [1261,\"Light showers of ice pellets\",\"Light showers of ice pellets\",374],\n  [1264,\"Moderate or heavy showers of ice pellets\",\"Moderate or heavy showers of ice pellets\",377],\n  [1273,\"Patchy light rain with thunder\",\"Patchy light rain with thunder\",386],\n  [1276,\"Moderate or heavy rain with thunder\",\"Moderate or heavy rain with thunder\",389],\n  [1279,\"Patchy light snow with thunder\",\"Patchy light snow with thunder\",392],\n  [1282,\"Moderate or heavy snow with thunder\",\"Moderate or heavy snow with thunder\",395],\n]);\n\n//# sourceURL=webpack://weather-app/./src/assets/weather_conditions.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dom: () => (/* binding */ dom)\n/* harmony export */ });\nclass DOM{\n  constructor(){\n    this.searchInput = document.querySelector(\".search-container input\");\n    this.searchButton = document.querySelector(\".search-container button\"); \n    this.weatherToday = document.querySelector(\".weather-info-today\");\n    this.weatherLocation = document.querySelector(\".location\");\n    this.weatherTemp = document.querySelector(\"temp\"); \n    this.weatherDescription = document.querySelector(\".description\"); \n  }\n\n}\n\n\nconst dom = new DOM(); \n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\n\nasync function setDefaultLocation(){\n  const defaultLocation = \"seattle\"; \n  const current = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(defaultLocation); \n  console.log(current);\n  \n  _dom__WEBPACK_IMPORTED_MODULE_0__.dom.weatherToday.textContent = `${current}`\n}\n\nfunction searchLocation(){\n  _dom__WEBPACK_IMPORTED_MODULE_0__.dom.searchButton.addEventListener(\"click\", ()=>{\n    const location = _dom__WEBPACK_IMPORTED_MODULE_0__.dom.searchInput.value;\n    (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(location); \n  })\n}\n\nconst handler = {\n  load: ()=>{\n    setDefaultLocation();\n    searchLocation();\n  },\n  \n}\n\n\n//# sourceURL=webpack://weather-app/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\n  _handlers__WEBPACK_IMPORTED_MODULE_0__.handler.load();\n})\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;