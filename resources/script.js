let container = document.querySelector(".container");
let colorOptions = document.querySelector("#color");
let slider = document.querySelector("#slider");
let squareDivs = slider.value;
// let eraseBtn = document.querySelector("#erase");
let blackBtn = document.querySelector("#black");
let selectBtn = document.querySelector("#selectColor");
let selectInput = document.querySelector("#selectInput");
let randomBtn = document.querySelector("#randomColor");
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
      e.target.style.backgroundColor = `${selectInput.value}`;
    });
  }
};

/*
//Erase Button
eraseBtn.addEventListener("click", () => eraseBox());

let eraseBox = () => {
  let cell = container.children;
  let val = slider.value;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "inherit";
    });
  }
};
*/

blackBtn.addEventListener("click", () => changeBlack());

let changeBlack = () => {
  let cell = container.children;
  let val = slider.value;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", () => {
      cell[i].style.backgroundColor = "black";
    });
  }
};

selectBtn.addEventListener("click", () => {
  let val = slider.value;
  let cell = container.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `${selectInput.value}`;
    });
  }
});

//Random Button
randomBtn.addEventListener("click", () => {
  let val = slider.value;
  let cell = container.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = getRandomColor();
    });
  }
});

let getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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
