function createGrid(size) {
    if(size <= 100 && size > 0) {
        let rows = document.querySelectorAll(".row");
        rows.forEach((row) => {
            row.remove();
        });

        for(let i = 0; i < size; i++) {
            let row = document.createElement("div");
            row.classList.add("row");

            for(let i = 0; i < size; i++) {
                let square = document.createElement("div");
                square.classList.add("square");
                onHover(square);
                row.appendChild(square);
            }
            
            container.appendChild(row);
        }
    } else {
        alert("Please enter a number smaller than 100 and greater than 0.")
    }
}

function onHover(square) {
    square.addEventListener("mouseover", (event) => {
        if(rainbow) {
        event.target.style.backgroundColor = randomRGB();
        } else {
            event.target.style.backgroundColor = "black";
        }
    });
}

function randomRGB() {
    let max = 255;

    return ("rgb(" +
        Math.floor(Math.random() * max) + "," +
        Math.floor(Math.random() * max) + "," +
        Math.floor(Math.random() * max) + ")"
    );
}

let body = document.querySelector("body");
let container = document.querySelector("#container");
let newCanvasButton = document.querySelector("#new-canvas-button");
let rainbowButton = document.querySelector("#rainbow-button");

let rainbow = false;

document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
});

newCanvasButton.addEventListener("click", () => {
    let input = prompt("Enter grid size:");
    createGrid(input);
});

rainbowButton.addEventListener("click", () => {
    rainbow = !rainbow;
});