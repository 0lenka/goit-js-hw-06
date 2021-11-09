function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector(".change-color")
const currentColor = document.querySelector(".color")
const sectionEl = document.querySelector(".widget")
const randomColor = getRandomHexColor()

buttonEl.addEventListener('click', onClickColorChange);

function onClickColorChange(event) {
  currentColor.textContent = `${randomColor}`;
 sectionEl.parentNode.style.backgroundColor = `${randomColor}`
 
}

