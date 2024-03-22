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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)\n/* harmony export */ });\nconst weatherAPI = {\n  KEY: \"9b80e0ff9b8349449c4181957231212\",\n  URL:  \"http://api.weatherapi.com/v1/\", \n};\n\nfunction throwWeatherDataError(currentWeatherError, forecastWeatherError){\n  if(currentWeatherError){\n    throw new Error(currentWeatherError); // need specific error type\n  }else{\n    throw new Error(forecastWeatherError); //need specific error type \n  }\n}\n\nfunction getForecastForDays(days){\n  const daysLength = days.length; \n  let forecastDaysArr =[]; \n\n  for(let i=0; i < daysLength; i++){\n    let forecastDay = {\n      date: days[i].date,\n      day: {\n        maxtemp_c: days[i].day.maxtemp_c,\n        maxtemp_f: days[i].day.maxtemp_f, \n        mintemp_c: days[i].day.mintemp_c, \n        mintemp_f: days[i].day.mintemp_f,\n      },\n      astro:{\n        is_moon_up: days[i].astro.is_moon_up, \n        is_sun_up: days[i].astro.is_sun_up,       \n      }\n    }\n    forecastDaysArr.push(forecastDay); \n  }\n\n  return forecastDaysArr; \n}\n\nfunction  storeData(currentData, forecastData){ \n  // console.log(`json data - current: ${}, forecast: ${}`)\n  const currentWeather = {\n    location: {\n      name: currentData.location.name.toString(), \n      region: currentData.location.region.toString(),\n      country: currentData.location.country.toString() ,\n    },\n    current:{\n      last_updated: currentData.current.last_updated, \n      temp_f: currentData.current.temp_f,\n      temp_c: currentData.current.temp_c,\n      is_day: currentData.current.is_day,\n      condition: {\n        text: currentData.current.condition.text,\n        icon: currentData.current.condition.icon,\n        code: currentData.current.condition.code, \n      },\n      wind_mph: currentData.current.wind_mph,\n      wind_kph: currentData.current.wind_kph, \n      humidity: currentData.current.humidity,\n      cloud: currentData.current.cloud,\n      feelslike_c: currentData.current.feelslike_c, \n      feelslike_f: currentData.current.feelslike_f, \n      humidity: currentData.current.humidity,\n      uv: currentData.current.uv,\n      gust_mph: currentData.current.mph, \n      gush_kph: currentData.current.kph, \n      air_quality: {\n        co: currentData.current.air_quality.co, \n        no2: currentData.current.air_quality.no2,\n        o3: currentData.current.air_quality.o3, \n        so2: currentData.current.air_quality.so2, \n      }\n    } \n  }\n  const forecastWeather = {\n    forecast: {\n      forecastday: getForecastForDays(forecastData.forecast.forecastday),\n    }\n  }\n\n  return {currentWeather, forecastWeather}; \n}\n\n\nasync function fetchWeather(location) {\n  const currentWeatherURL = `${weatherAPI.URL}current.json?key=${weatherAPI.KEY}&q=${location}&aqi=yes`;\n  const forecastWeatherURL = `${weatherAPI.URL}forecast.json?key=${weatherAPI.KEY}&q=${location}&days=3&aqi=yes&alerts=no`; \n\n  try {\n    const currentWeatherResponse = await fetch(currentWeatherURL,  { mode: \"cors\" });\n    const forecastWeatherResponse = await fetch(forecastWeatherURL,  { mode: \"cors\" }); \n\n    const currentWeatherData = await currentWeatherResponse.json();\n    const forecastWeatherData = await forecastWeatherResponse.json(); \n\n\n    if(currentWeatherData.error || forecastWeatherData.error) {\n      throwWeatherDataError(currentWeatherData.error, forecastWeatherData.error)\n    }\n    \n    return storeData(currentWeatherData, forecastWeatherData); \n  } catch(error) {\n    console.error(\"Error fetching weather:\", error);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dom: () => (/* binding */ dom)\n/* harmony export */ });\nclass DOM{\n  constructor(){\n    this.searchInput = document.querySelector(\".search-container input\");\n    this.searchButton = document.querySelector(\".search-container button\");  \n  }\n\n  setToday(weather){\n    const todayContainer = document.querySelector(\".weather-info-today\");\n    const locationElem= document.querySelector(\".location\");\n    const lastUpdatedElem = document.querySelector(\".last-updated\"); \n    const temperatureElem = document.querySelector(\".temp \"); \n    const descriptionElem = document.querySelector(\".description\"); \n    const image = document.createElement(\"img\"); \n    // image.src = IMG;\n    todayContainer.appendChild(image);\n  \n  \n    const current = weather.current; \n    const location = weather.location; \n    // const currentConditionCode = current.condition.code; \n    locationElem.textContent = `Weather for: ${location.name}`; \n    lastUpdatedElem.textContent = `Last Updated: ${current.last_updated}`\n    temperatureElem.textContent = `${current.temp_f} °F`; \n    descriptionElem.textContent = `${current.condition.text}`; \n  }\n}\n\n\nconst dom = new DOM(); \n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\n\nasync function setDefaultLocation(){\n  const defaultLocation = \"seattle\"; \n  const weather = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(defaultLocation); \n  const today = weather.currentWeather; \n  const forecast = weather.forecastWeather; \n\n  console.log(weather); \n  _dom__WEBPACK_IMPORTED_MODULE_0__.dom.setToday(today); \n}\n\nfunction searchLocation(){\n  _dom__WEBPACK_IMPORTED_MODULE_0__.dom.searchButton.addEventListener(\"click\", ()=>{\n    const location = _dom__WEBPACK_IMPORTED_MODULE_0__.dom.searchInput.value;\n    (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(location); \n  })\n}\n\nconst handler = {\n  load: ()=>{\n    setDefaultLocation();\n    searchLocation();\n  },\n  \n}\n\n\n//# sourceURL=webpack://weather-app/./src/handlers.js?");

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