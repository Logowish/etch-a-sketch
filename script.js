const container = document.querySelector(".container");
const randomColor = document.getElementById("randomColor");
const opacity = document.getElementById("opacity");
const eraser = document.getElementById("eraser");
const reset = document.getElementById("reset");

let squareNum;
let squares;

function buildGrid(squareNum) {
    container.style.gridTemplateColumns = "repeat(" + squareNum + ", 1fr)";

    for (let x = 0; x < squareNum; x++) {
        for (let y = 0; y < squareNum; y++) {
            const square = document.createElement("div");
                square.classList.add("square")
                container.appendChild(square);
            square.onmouseover = () => square.style.backgroundColor = "black";
        }
    }

    squares = document.querySelectorAll(".square");
}

buildGrid(16);


// Color functions
function setColor(square) {
    square.style.removeProperty("opacity");
    let color = document.getElementById("color").value;
    square.style.backgroundColor = `${color}`;
}

color.addEventListener("click", () => {
    squares.forEach((square) => {
        square.onmouseover = () => setColor(square);
    });
});

function setRandomColor(square) {
    square.style.removeProperty("opacity");
    square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, 
                                    ${Math.floor(Math.random() * 255)}, 
                                    ${Math.floor(Math.random() * 255)})`;
}

randomColor.addEventListener("click", () => {
    squares.forEach((square) => {
        square.onmouseover = () => setRandomColor(square);
    });
});

// choose one of the codes below
function setOpacity(square) {
    //square.style.backgroundColor = `rgba(0, 0, 0, ${square.style.opacity = Number(square.style.opacity) + 0.1})`;
    square.style.opacity = Number(square.style.opacity) + 0.1;
}

opacity.addEventListener("click", () => {
    squares.forEach((square) => {
        square.onmouseover = () => setOpacity(square);
    });
});


eraser.addEventListener("click", () => {
    squares.forEach((square) => {
        square.onmouseover = () => square.removeAttribute("style");
    });
})

reset.addEventListener("click", () => {
    container.textContent = '';
    let squareNum = prompt("Please enter a number between 1-100 \nto determine the squares per side for the grid.")
    
    while (squareNum < 1 || squareNum > 100 || isNaN(squareNum)) {
        squareNum = prompt("Number invalid. \nPlease enter a number between 1-100.");
    }
    
    buildGrid(squareNum);
    document.getElementById("color").value = "black";
});