const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector("#text")
console.log(inputEl)
inputEl.addEventListener("input", onInputRangeChange);

function onInputRangeChange(event) {
    console.log(inputEl.value)
   textEl.style.fontSize = `${inputEl.value}px`
}