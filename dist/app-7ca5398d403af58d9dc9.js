/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Game of life</title>\n</head>\n<body>\n    <div class=\"cont\">\n        \n        <div class=\"modalWindow\"></div>\n\n        <h1 id=\"title\">Игра \"Жизнь\"</h1>\n        <div id=\"world\"></div>\n        <h2 class=\"subTitle\">Правила игры:</h2>\n        <ol class=\"navPanel\">\n            <li class=\"navPanel__li\">Задайте ширину и высоту поля для игры и нажмите кнопку \"Создать\"</li>\n            <li class=\"navPanel__li\">Нажмите на клетку чтобы сделать ее живой</li>\n            <li class=\"navPanel__li\">Нажмите на кнопку \"Начать игру!\" чтобы запустить игру и ее раз нажмите для паузы</li>\n            <li class=\"navPanel__li\">Нажмите на кнопку \"Сброс\" для сброса игры</li>\n        </ol>\n        <div class=\"navButtons\">\n            <h3 class=\"subTitle\">Панель навигации</h3>\n            <nav class=\"navButtons__panel\">\n                <div class=\"navButtons__buttons\">\n                    <button id=\"startBtn\" class=\"hoverCursor\">Начать игру!</button>\n                    <button id=\"reset\" class=\"hoveroursor\">Сброс</button>\n                </div>\n        \n                <div>\n                    <label for=\"speed\" id=\"evolutionSpeedTitle\">Скорость эволюции</label>\n                    <input type=\"range\" name=\"speed\" id=\"speed\" min=\"300\" max=\"3000\" step=\"100\" class=\"hoverCursor\">\n                </div>\n            </nav>\n            \n        </div>\n        <div class=\"initParamsBox\">\n            <form method=\"get\">\n                <div>\n                    <input type=\"number\" name=\"row\" class=\"initNumbers\" id=\"row\" min=\"10\" max=\"50\" placeholder=\"Ширина\">\n                    <input type=\"number\" name=\"column\" class=\"initNumbers\" id=\"column\" min=\"10\" max=\"50\" placeholder=\"Высота\">\n                </div>\n                <input type=\"button\" value=\"Создать мир\" name=\"submit\" id=\"sub\" class=\"hoverCursor\">\n            </form>\n        </div>\n        <footer class=\"footer\">\n            All Rights reserved\n        </footer>\n    </div>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
 



let rows;
let columns;

let world = document.querySelector('#world');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#reset');

const navButtons = document.querySelector('.navButtons');
const initParamsBox = document.querySelector('.initParamsBox');

const mediaQuery320 = window.matchMedia('(min-width: 320px)')
const mediaQuery425 = window.matchMedia('(min-width: 425px)')
const mediaQuery768 = window.matchMedia('(min-width: 768px)')
const mediaQuery1024 = window.matchMedia('(min-width: 1024px)')

let started=false;// Set to true when use clicks start
let timer;//To control evolutions
let lifeSpeed = document.querySelector('#speed');
let lifeSpeedValue = 1000;

const modalWindowErrors = document.querySelector('.modalWindow');

function showModalErrors(textError){
    modalWindowErrors.style.top = "6px";
    modalWindowErrors.innerHTML = textError;
}
function closeModal(){
    modalWindowErrors.style.top = "-50px";
}

function commonFunc(textError){
    showModalErrors(textError);
    setTimeout(()=>{
        closeModal()
    },2000);
}

const userRow = document.querySelector('#row');
const userColumn = document.querySelector('#column');
const sub = document.querySelector('#sub');

sub.addEventListener('click', () => {


    let userRowValue = userRow.value;
    let userColumnValue = userColumn.value;

    if(mediaQuery320.matches && !mediaQuery425.matches && !mediaQuery768.matches && !mediaQuery1024.matches){
        console.log('MODILE: 320 to 424');
        if(!Number(isNaN(userRowValue)) && userRowValue != '' && userRowValue >= 8 && userRowValue <=13){

            rows = userRowValue;
        }
        if(!Number(isNaN(userColumnValue)) && userColumnValue != ''  && userColumnValue >= 8 && userColumnValue <=13){
    
            columns = userColumnValue;
        }
        else{
            commonFunc('Ширина и высота должны быть от 8 до 13')
        }
    }
    else if(mediaQuery320.matches && mediaQuery425.matches && !mediaQuery768.matches && !mediaQuery1024.matches){
        console.log('TABLET: 425 to 767');
        if(!Number(isNaN(userRowValue)) && userRowValue != '' && userRowValue >= 10 && userRowValue <= 17){

            rows = userRowValue;
        }
        if(!Number(isNaN(userColumnValue)) && userColumnValue != ''  && userColumnValue >= 10 && userColumnValue <= 17){
    
            columns = userColumnValue;
        }
        else{
            commonFunc('Ширина и высота должны быть от 10 до 17')
        }
    }
    else if(mediaQuery320.matches && mediaQuery425.matches && mediaQuery768.matches && !mediaQuery1024.matches){
        console.log('LITLE DESKTOP: 768 to 1023');
        if(!Number(isNaN(userRowValue)) && userRowValue != '' && userRowValue >= 15 && userRowValue <= 23){

            rows = userRowValue;
        }
        if(!Number(isNaN(userColumnValue)) && userColumnValue != ''  && userColumnValue >= 15 && userColumnValue <= 23){
    
            columns = userColumnValue;
        }
        else{
            commonFunc('Ширина и высота должны быть от 15 до 23')
        }
    } 
    else if(mediaQuery320.matches && mediaQuery425.matches && mediaQuery768.matches && mediaQuery1024.matches){
        console.log('LITLE DESKTOP: 768 to 1023');
        if(!Number(isNaN(userRowValue)) && userRowValue != '' && userRowValue >= 15 && userRowValue <= 27){

            rows = userRowValue;
        }
        if(!Number(isNaN(userColumnValue)) && userColumnValue != ''  && userColumnValue >= 15 && userColumnValue <= 27){
    
            columns = userColumnValue;
        }
        else{
            commonFunc('Ширина и высота должны быть от 15 до 27')
        }
    } 
    

    if(rows && columns){
        navButtons.style.display = 'block';
        initParamsBox.style.display = 'none';
        beginWorld();



    }
    
})




        // Function that change speed
        lifeSpeed.onchange = () => {
            lifeSpeedValue = lifeSpeed.value;
        }



        // create 2D Arrays
        let currentGeneration = [rows];
        let nextGeneration = [rows];


        function createGenerationArrays(){
            for (let i = 0; i < rows; i++) {
                currentGeneration[i] = new Array(columns);
                nextGeneration[i] = new Array(columns);
                
            }
        }
        function initialGenerationArrays(){
            for (let i = 0; i < rows; i++) {
                for (let k = 0; k < columns; k++) {
                    currentGeneration[i][k] = 0;
                    nextGeneration[i][k] = 0;
                }
            }
        }


        // Create world by tables
        function createWorld(){
            let table = document.createElement('table');
            table.setAttribute('id', 'worldGrid');
            for(let i=0; i<rows; i++){
                let tr = document.createElement('tr');
                for(let k = 0; k < columns; k++){
                    let cell = document.createElement('td');
                    cell.setAttribute('id', i + '_' + k);
                    cell.setAttribute('class', 'dead');
                    tr.appendChild(cell);
                }
                table.appendChild(tr);
            }
            world.appendChild(table);
            world.addEventListener('click', cellClick);
            
        }

        // addEventListener
        function cellClick(data) {
            let loc = data.target.id.split("_");
            // console.log(loc);
            let row = Number(loc[0]);//Get i
            let col = Number(loc[1]);//Get j
            // Toggle cell alive or dead
            if(data.target.localName==='td'){
                if (data.target.className==='alive'){
                    data.target.setAttribute('class', 'dead');
                    currentGeneration[row][col] = 0;
                }
                else{
                    data.target.setAttribute('class', 'alive');
                    currentGeneration[row][col] = 1;
                }
            }
        }



        // Cheking for neighbors and expect the rules
        function getNeighborsCounter(row, col) {
            let count = 0;
            let nrow=Number(row);
            let ncol=Number(col);
            
                // Make sure we are not at the first row
                if (nrow - 1 >= 0) {
                // Check top neighbor
                if (currentGeneration[nrow - 1][ncol] == 1) 
                    count++;
            }
                // Make sure we are not in the first cell
                // Upper left corner
                if (nrow - 1 >= 0 && ncol - 1 >= 0) {
                //Check upper left neighbor
                if (currentGeneration[nrow - 1][ncol - 1] == 1) 
                    count++;
            }
        // Make sure we are not on the first row last column
                // Upper right corner
                if (nrow - 1 >= 0 && ncol + 1 < columns) {
                //Check upper right neighbor
                    if (currentGeneration[nrow - 1][ncol + 1] == 1) 
                        count++;
                }
        // Make sure we are not on the first column
            if (ncol - 1 >= 0) {
                //Check left neighbor
                if (currentGeneration[nrow][ncol - 1] == 1) 
                    count++;
            }
            // Make sure we are not on the last column
            if (ncol + 1 < columns) {
                //Check right neighbor
                if (currentGeneration[nrow][ncol + 1] == 1) 
                    count++;
            }
        // Make sure we are not on the bottom left corner
            if (nrow + 1 < rows && ncol - 1 >= 0) {
                //Check bottom left neighbor
                if (currentGeneration[nrow + 1][ncol - 1] == 1) 
                    count++;
            }
        // Make sure we are not on the bottom right
            if (nrow + 1 < rows && ncol + 1 < columns) {
                //Check bottom right neighbor
                if (currentGeneration[nrow + 1][ncol + 1] == 1) 
                    count++;
            }
            
            
                // Make sure we are not on the last row
            if (nrow + 1 < rows) {
                //Check bottom neighbor
                if (currentGeneration[nrow + 1][ncol] == 1) 
                    count++;
            }
            
            
            return count;
        }

                // Define conditions of cell
                function createNextGeneration() {
                    for (row in currentGeneration) {
                        for (col in currentGeneration[row]) {
                        
                            let neighbors = getNeighborsCounter(row, col);
                        
                            // Check the rules
                            // If Alive
                            if (currentGeneration[row][col] == 1) {
                            
                                if (neighbors < 2) {
                                    nextGeneration[row][col] = 0;
                                } else if (neighbors == 2 || neighbors == 3) {
                                    nextGeneration[row][col] = 1;
                                } else if (neighbors > 3) {
                                    nextGeneration[row][col] = 0;
                                }
                            } else if (currentGeneration[row][col] == 0) {
                                // If Dead or Empty
                            
                                if (neighbors == 3) {
                                    // Propogate the species
                                    nextGeneration[row][col] = 1;//Birth?
                                }
                            }
                        }
                    }
                }

        // 

        function updateCurrentGeneration() {
            
            for (row in currentGeneration) {
                for (col in currentGeneration[row]) {
                    // Update the current generation with
                    // the results of createNextGen function
                    currentGeneration[row][col] = nextGeneration[row][col];
                    // Set nextGen back to empty
                    nextGeneration[row][col] = 0;
                }
            }
        
        }
        function updateWorld() {
            let cell='';
            for (row in currentGeneration) {
                for (col in currentGeneration[row]) {
                    // cell = document.getElementById(row + '_' + col);
                    cell = document.getElementById(`${row}_${col}`);
                    if (currentGeneration[row][col] == 0) {
                        cell.setAttribute('class', 'dead');

                    } else {
                        cell.setAttribute('class', 'alive');
                    }
                }
            }
        }



        // create startLife fucntion

        function startLife(){
            createNextGeneration();//Apply the rules
            updateCurrentGeneration();//Set Current values from new generation
            updateWorld();//Update the world view
            // check()
            if(started){
                timer = (setTimeout(startLife, lifeSpeedValue));
                // setTimeout(check, lifeSpeedValue)
            }

        }


        // Function start and stop life
        function startAndStop(){
            if(!started){
                started = true;
                startBtn.innerText = 'Остановить игры';
                startLife();
            } else {
                started = false;
                startBtn.innerText = 'Начать игру!';
                clearTimeout(timer);
                
            }

        }

        // reload page ande reset data
        function resetData(){
            window.location.reload();
            navButtons.style.display = 'none';
            initParamsBox.style.display = 'block';
        }

        startBtn.addEventListener('click', startAndStop);
        resetBtn.addEventListener('click', resetData);


        function beginWorld(){
            createWorld();
            createGenerationArrays();
            initialGenerationArrays();
        }

})();

/******/ })()
;
//# sourceMappingURL=app-7ca5398d403af58d9dc9.js.map