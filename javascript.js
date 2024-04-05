function createGrid(size) {
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
}

function onHover(square) {
    square.addEventListener("mouseover", (event) => {
        event.target.classList.add("square-hover");
    });
}

let container = document.querySelector("#container");

createGrid(16);