import './index.html'; 
import './index.scss';


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
