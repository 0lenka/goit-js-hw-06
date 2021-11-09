let counterValue = 0;
let totalValue = document.querySelector('#value')

const subtractButton = document.querySelector('[data-action="decrement"]')
subtractButton.addEventListener('click', (substract) => {
    counterValue -= 1;
    totalValue.textContent = counterValue;
})

const addButton = document.querySelector('[data-action="increment"]')
addButton.addEventListener('click', (add) => {
    counterValue += 1;
    totalValue.textContent = counterValue;
})
