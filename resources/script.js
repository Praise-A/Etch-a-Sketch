let container = document.querySelector(".container");
let colorOptions = document.querySelector("#color");
let slider = document.querySelector("#slider");
let squareDivs = slider.value;
let vall = document.querySelector(".value");
let clearBtn = document.querySelector("#clear");

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

// color.addEventListener("select", changeColor());

// slider.addEventListener("input", changeGridSize());

//Clear Button
clearBtn.addEventListener("click", function () {
  let cell = container.children;
  for (let i = 0; i < squareDivs * squareDivs; i++) {
    cell[i].style.backgroundColor = "inherit";
  }
});

// let changeGridSize = () => {};
vall.innerHTML = slider.value;
slider.addEventListener("input", function () {
  vall.innerHTML = this.value;
  squareDivs = this.value;
});

createGrid(squareDivs);
