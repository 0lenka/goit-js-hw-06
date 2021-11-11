const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputLength);

function onInputLength(event) {

    if (inputEl.value.length === 6) {
        inputEl.classList.remove("invalid")
        inputEl.classList.add("valid");
    }
    else {
        inputEl.classList.remove("valid")
        inputEl.classList.add("invalid");
    }
}

