const MAX = 7;
const MIN = 2;
let score = 0;
let oldScore = 0;
let correctCount = 0;
let grid_row = MIN;
let grid_col = MIN;
let terminate = false;
let correct = true;
let pattern = [];
let tiles = MIN;

function generateInfoBar() {
    let info = document.createElement("DIV");
    info.className = "info";
    document.body.appendChild(info);

    let tileNo = document.createElement("PRE");
    tileNo.innerHTML = "TILES   " + grid_col + "        SCORE   " + score + "   ";
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
    tileNo.innerHTML = "TILES   " + tiles + "        SCORE   " + score + "   ";
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
            griditem[i].classList.toggle('is-flipped');
            correct = checkTile(this);
            
            if(correct) {
                score++;
                updateInfoBar();
                if(score - oldScore == tiles) {
                    tiles++;
                    updateInfoBar();
                    if(tiles % 2 == 0) {
                        grid_row++;
                    } else {
                        grid_col++;
                    }
                    updateGrid();
                    generatePattern();
                }
            } else {
                score--;
                updateInfoBar();
                generatePattern();
            }
        });
    }
}

function generatePattern() {
    for(let i = 0; i < tiles; i++) {
            let num = Math.floor(Math.random() * grid_row * grid_col);
            for(let j = 0; j < i; j++) {
                while(num == pattern[j]) {
                    num = Math.floor(Math.random() * grid_row * grid_col);
                }
            }

            pattern[i] = num;
            console.log(num);
            let griditem = document.querySelectorAll(".grid_item");
            setTimeout(function(){ griditem[pattern[i]].classList.toggle('is-flipped'); }, 1000);
            setTimeout(function(){ griditem[pattern[i]].classList.toggle('is-flipped'); }, 4000);
    }

    let grid_container = document.querySelector(".grid_container");
    setTimeout(function(){ grid_container.classList.toggle('animate'); }, 6000);
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

    // while(grid_container.firstChild) {
    //     grid_container.remove(grid_container.firstChild);
    // }

    if(grid_row * grid_col > griditem.length) {
        for(let i = griditem.length; i < grid_row * grid_col; i++) {
            let grid_item = document.createElement("DIV");
            grid_item.className = "grid_item";
            grid_item.id = String(i);
            grid_item.addEventListener("click", function(event) {
                grid_item.classList.toggle('is-flipped');
            });
            grid_container.appendChild(grid_item);
        }
        
        // let griditem = document.querySelectorAll(".grid_item");
        // for(let i = 0; i < griditem.length; i++) {
        //     griditem.addEventListener("click", function(event) {
        //         griditem.classList.toggle('is-flipped');
        //     });
        // }
    } else if(grid_row * grid_col < griditem.length) {
        for(let i = griditem.length; i > grid_row * grid_col; i--) {
            grid_container.removeChild(grid_container.firstChild);
        }
    }
}

generateInfoBar();
generateGrid();
generatePattern();

// while(!terminate) {
//     while(correct) {
//         updateInfoBar();
//         updateGrid();
//     }

//     if(score < 0) {
//         terminate = true;
//     }
// }






