let container = document.querySelector(".container");
let colorOptions = document.querySelector("#color");
let slider = document.querySelector("#slider");
let squareDivs = slider.value;
let clearBtn = document.querySelector("#clear");
let value = document.querySelector(".value");

let createGrid = (divSize) => {
  for (let i = 0; i < divSize * divSize; i++) {
    let grid = document.createElement("div");
    grid.classList.add("box");

    container.appendChild(grid);
    container.style.gridTemplateColumns = `repeat(${divSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${divSize}, 1fr)`;

    grid.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `${colorOptions.value}`;
    });
  }
};

//Clear Button
clearBtn.addEventListener("click", () => clearGrid());

let clearGrid = () => {
  let cell = container.children;
  let val = slider.value;
  for (let i = 0; i < val * val; i++) {
    cell[i].style.backgroundColor = "inherit";
  }
};

// slider.addEventListener("input", ());

//Change Slider Value
slider.addEventListener("input", () => {
  let val = slider.value;
  value.innerHTML = val;
  changeGridSize(val);
});

//Change Grid Size
let changeGridSize = (a) => {
  container.innerHTML = "";
  createGrid(a);
};

createGrid(squareDivs);
