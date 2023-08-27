let container = document.querySelector(".container");
let colorOptions = document.querySelector("#color");
let slider = document.querySelector("#slider");
let squareDivs = slider.value;
let vall = document.querySelector(".value");

let createGrid = (divSize) => {
  for (let i = 0; i < divSize * divSize; i++) {
    let grid = document.createElement("div");
    grid.classList.add("box");

    container.appendChild(grid);
    container.style.gridTemplateColumns = `repeat(${divSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${divSize}, 1fr)`;

    grid.addEventListener(
      "mouseover",
      (chooseColor = (e) => {
        e.target.style.backgroundColor = `${colorOptions.value}`;
      })
    );
  }
};

slider.addEventListener("input", function () {
  let val = document.getElementById("slider").value;
  screenVal.textContent = val;
  removeAllChildNodes(grid);
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`
  );
  for (let i = 0; i < val * val; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    grid.appendChild(div);
  }
});

// color.addEventListener("select", changeColor());

// slider.addEventListener("input", changeGridSize());

// let changeGridSize = () => {};
vall.innerHTML = slider.value;
slider.addEventListener("input", function () {
  vall.innerHTML = this.value;
  squareDivs = this.value;
});

createGrid(squareDivs);
