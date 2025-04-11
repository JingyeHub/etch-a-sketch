const grid = document.querySelector("#grid");
const createGridBtn = document.querySelector("#createGridBtn")
const removeGridBtn = document.querySelector("#removeGridBtn");
const clearGridBtn = document.querySelector("#clearGridBtn");
const switchColorBtn = document.querySelector("#switchColorBtn");

createGridBtn.addEventListener("click", () => {

    const gridSize = +prompt("Enter the size of the grid:");

    for (let i = 0; i < gridSize * gridSize; i++) {

        const gridCell = document.createElement("div");
        gridCell.setAttribute("class", "cell");
        gridCell.style.width = `${498 / gridSize}px`;
        gridCell.style.height = `${498 / gridSize}px`;
        grid.appendChild(gridCell);

        gridCell.addEventListener("mouseenter", () => {
            let penColor = switchColorBtn.textContent;
            gridCell.style.backgroundColor = penColor;
            gridCell.style.border = "none";
        })
    }

})

removeGridBtn.addEventListener("click", (e) => {

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        grid.removeChild(cell);
    })

})

clearGridBtn.addEventListener("click", () => {

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "";
        cell.style.border = "0.2px dashed gray";
    })

})

switchColorBtn.addEventListener("click", (e) => {

    if (e.target.textContent === "black") {
        e.target.textContent = "tomato";
    } else {
        e.target.textContent = "black";
    }
})