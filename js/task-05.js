const inputName = document.querySelector("#name-input")
let output = document.querySelector("#name-output")
console.log(inputName)
console.log(output)
inputName.addEventListener("input", onInputChange)
function onInputChange(event) {
    if (inputName.value === "") {
        output.textContent = "Anonymus"
    }
    else {
        output.textContent = event.currentTarget.value;
    }    
    
}