const hex = document.querySelector(".color");
const button = document.querySelector(".generate");

const generateColor = () => {
  let generateColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + generateColor;
  hex.innerHTML = "#" + generateColor;
};
button.addEventListener("click", generateColor);
