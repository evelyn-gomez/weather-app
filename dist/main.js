/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"hello mundo\");\nconst main = document.querySelector(\".main\");\nconst searchContainer = document.querySelector(\".search-container\"); \nconst searchInput = document.querySelector(\".search-container input\");\nconst searchButton = document.querySelector(\".search-container button\"); \n\nconst apiKey = \"9b80e0ff9b8349449c4181957231212\";\nconst apiURL =  \"http://api.weatherapi.com/v1/\";\n\nsearchButton.addEventListener(\"click\", ()=>{\n  const location = searchInput.value; \n  \n  if(location){\n    fetchWeather(location);\n  }else{\n    console.log(\"empty -- need city name or zipcode\"); \n  }\n})\n\nfunction fetchWeather(location){\n  const url = `${apiURL}current.json?key=${apiKey}&q=${location}&aqi=yes`; \n\n  fetch(url)\n  .then(resp => resp.json())\n  .then(data => {\n    if (data.error) {\n      throw data.error\n    }\n    console.log(data);\n  })\n  .catch(error => console.log(error))\n}\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;