const MAX = 7;
const MIN = 2;
let score = 0;
let oldScore = 0;
let correctCount = 0;
let grid_row = MIN;
let grid_col = MIN;
let tiles = MIN;
let terminate = false;
let correct = true;
let pattern = [];

function generateInfoBar() {
    let info = document.createElement("DIV");
    info.className = "info";
    document.body.appendChild(info);

    let tileNo = document.createElement("PRE");
    tileNo.innerHTML = "TILES&nbsp" + grid_col + "\t\tSCORE&nbsp" + score + "\t\t";
    tileNo.id = "tileNo";
    info.appendChild(tileNo);

    let terminateBtn = document.createElement("BUTTON");
    terminateBtn.innerHTML = "Terminate";
    terminateBtn.addEventListener("click", function(event) {
        terminate = true;
    });
    tileNo.appendChild(terminateBtn);
}

function updateInfoBar() {
    let tileNo = document.getElementById("tileNo");
    tileNo.innerHTML = "TILES&nbsp" + tiles + "\t\tSCORE&nbsp" + score + "\t\t";
}

function generateGrid() {
    let grid_container = document.createElement("DIV");
    grid_container.className = "grid_container";
    grid_container.style["grid-template-columns"] = "repeat(" + grid_col + "," + 100 / grid_col + "%)";
    grid_container.style["grid-template-rows"] = "repeat(" + grid_row + "," + 100 / grid_row + "%)";
    document.body.appendChild(grid_container);
    
    for(let i = 0; i < grid_row * grid_col; i++) {
        let grid_item = document.createElement("DIV");
        grid_item.className = "grid_item";
        grid_item.id = String(i);
        grid_container.appendChild(grid_item);
    }
    
    let griditem = document.querySelectorAll(".grid_item");
    for(let i = 0; i < griditem.length; i++) {
        griditem[i].addEventListener("click", function(event) {
            
            correct = checkTile(this);
            
            if(correct) {
                setTimeout(griditem[i].classList.toggle('is-flipped'), 0);
                score++;
                correctCount++;
                console.log(correctCount);
                updateInfoBar();
                if(correctCount == tiles) {
                    tiles++;
                    correctCount = 0;
                    updateInfoBar();

                    if(tiles % 2 == 0) {
                        grid_row++;
                    } else {
                        grid_col++;
                    }
                    generatePattern();
                    updateGrid();
                    setTimeout(displayPattern(), 4000);
                }
            } else {
                griditem[i].classList.toggle('wrong-flip');
                score--;
                tiles--;
                correctCount = 0;
                updateInfoBar();

                if(tiles % 2 != 0) {
                    grid_row--;
                } else {
                    grid_col--;
                }
                generatePattern();
                setTimeout(updateGrid(), 1000);
                setTimeout(displayPattern(), 4000);
            }
        });
    }
}

function generatePattern() {
    pattern = [];
    for(let i = 0; i < tiles; i++) {
            let num = Math.floor(Math.random() * grid_row * grid_col);
            for(let j = 0; j <= i; j++) {
                if(pattern[j] == num) {
                    num = Math.floor(Math.random() * grid_row * grid_col);
                    j = -1;
                }
            }
            pattern[i] = num;
    }
    console.log(pattern);
}

function displayPattern() {
    let grid_item = document.querySelectorAll(".grid_item");
    for(let i = 0; i < grid_item.length; i++) {
        if(grid_item[i].classList.contains('is-flipped')) {
            setTimeout(grid_item[i].classList.toggle('is-flipped'), 2000);
        } else if(grid_item[i].classList.contains('wrong-flip')) {
            setTimeout(grid_item[i].classList.toggle('wrong-flip'), 2000);
        }
    }

    for(let i = 0; i < pattern.length; i++) {
        setTimeout(function(){ grid_item[pattern[i]].classList.toggle('is-flipped'); }, 1000);
        setTimeout(function(){ grid_item[pattern[i]].classList.toggle('is-flipped'); }, 6000);
    }
    let grid_container = document.querySelector(".grid_container");
    setTimeout(function(){ grid_container.classList.toggle('animate'); }, 8000);        
}

function checkTile(grid) {
    for(let j = 0; j < pattern.length; j++) {
        if(grid.id == pattern[j]) {
            return true;
        }
    }

    return false;
}

function updateGrid() {
    let griditem = document.querySelectorAll(".grid_item");
    let grid_container = document.querySelector(".grid_container");

    grid_container.style["grid-template-columns"] = "repeat(" + grid_col + "," + 100 / grid_col + "%)";
    grid_container.style["grid-template-rows"] = "repeat(" + grid_row + "," + 100 / grid_row + "%)";

    

    if(grid_row * grid_col > griditem.length) { 
        console.log("more tiles");
        for(let i = griditem.length; i < grid_row * grid_col; i++) {
            let grid_item = document.createElement("DIV");
            grid_item.className = "grid_item";
            grid_item.id = String(i);
            grid_item.addEventListener("click", function(event) {
                correct = checkTile(this);
            
                if(correct) {
                    grid_item.classList.toggle('is-flipped');
                    score++;
                    correctCount++;
                    console.log(correctCount);
                    updateInfoBar();
                    if(correctCount == tiles) {
                        tiles++;
                        correctCount = 0;
                        updateInfoBar();

                        if(tiles % 2 == 0) {
                            grid_row++;
                        } else {
                            grid_col++;
                        }
                        generatePattern();
                        updateGrid();
                        setTimeout(displayPattern(), 4000);
                    }
                } else {
                    grid_item.classList.toggle('wrong-flip');
                    score--;
                    tiles--;
                    correctCount = 0;
                    updateInfoBar();
    
                    if(tiles % 2 != 0) {
                        grid_row--;
                    } else {
                        grid_col--;
                    }
                    generatePattern();
                    updateGrid();
                    setTimeout(displayPattern(), 4000);
                }
            });
            grid_container.appendChild(grid_item);
        }
    } else if(grid_row * grid_col < griditem.length) {
        console.log("less tiles");
        for(let i = griditem.length; i > grid_row * grid_col; i--) {
            grid_container.removeChild(grid_container.lastChild);
        }
    }
}

generateInfoBar();
generateGrid();
generatePattern();
displayPattern();







