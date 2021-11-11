
const buttonEl = document.querySelector(".change-color")
const currentColor = document.querySelector(".color")
const sectionEl = document.querySelector(".widget")

buttonEl.addEventListener('click', onClickColorChange, getRandomHexColor);

function getRandomHexColor(event) {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickColorChange(event) {
  const randomColor = getRandomHexColor() 
  currentColor.textContent = `${randomColor}`;
 sectionEl.parentNode.style.backgroundColor = `${randomColor}`
 
}

