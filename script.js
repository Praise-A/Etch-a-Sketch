let container = document.querySelector(".container");

let createGrid = () => {
  for (let i = 0; i < 16; i++) {
    let grid = document.createElement("div");
    let color = "black";

    grid.classList.add("box");

    container.appendChild(grid);

    grid.addEventListener("mouseover", changeColor(grid, color));
  }
};

let changeColor = (a, c) => {
  a.style.backgroundColor = c;
};

createGrid();
