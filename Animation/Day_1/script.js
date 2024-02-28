// red
let red = document.querySelector(".red");
let body = document.querySelector("body");
console.log(body);

red.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});

// blue
let blue = document.querySelector(".blue");
blue.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});

// orange
let orange = document.querySelector(".orange");
orange.addEventListener("click", () => {
  body.style.backgroundColor = "orange";
});
//  green
let green = document.querySelector(".green");
green.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});
