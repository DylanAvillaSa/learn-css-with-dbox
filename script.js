let innerBox = document.querySelector(".innerbox");
let box = document.querySelector("#box");
const input = document.querySelector("input");
const button = document.querySelector("button");
const menu = document.querySelector(".menu");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const toggle = document.querySelector(".ismenu");
const cheat = document.querySelector(".cheat");
const more = document.querySelector(".more");
const arr = [];

const addCSS = () => {
  let value = input.value;
  arr.push(value);
  const newArr = arr.join("; ");

  box.setAttribute("style", newArr);

  input.value = "";
  input.focus();
};

const handleMenu = () => {
  toggle.style.display = "flex";
  toggle.classList.toggle("ismenu");
};

const handleMore = () => {
  const newBox = document.createElement("div");
  newBox.classList.add("innerbox");

  box.appendChild(newBox);
};

more.addEventListener("click", handleMore);

// flex box cheatsheet
cheat.addEventListener("click", function () {
  document.location.href =
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/";
});

// parentbox function
parent.addEventListener("click", function () {
  document.location.href = "/example.html";
});

// innerbox function
child.addEventListener("click", function () {
  document.location.href = "https://www.w3schools.com/w3css/defaulT.asp";
});
menu.addEventListener("click", handleMenu);
button.addEventListener("click", addCSS);
