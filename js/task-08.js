const formEl = document.querySelector(".login-form")
formEl.addEventListener("submit", onSubmitChange);


function onSubmitChange(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены");
    }
    else {
        console.log({email: email.value, password: password.value});
    }
}

