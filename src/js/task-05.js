const inputName = document.querySelector("#name-input")
let output = document.querySelector("#name-output")
console.log(inputName)
console.log(output)
inputName.addEventListener("input", onInputChange)
function onInputChange(event) {
    output.textContent = event.currentTarget.value;
    
}