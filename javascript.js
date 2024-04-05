function createGrid(size) {
    let container = document.querySelector("#container");

    for(let i = 0; i < size; i++) {
        let row = document.createElement("row");

        for(let i = 0; i < size; i++) {
            let square = document.createElement("square");
            row.appendChild(square);
        }
        
        container.appendChild(row);
    }
}

createGrid(16);