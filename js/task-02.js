const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector('#ingredients')

const elements = ingredients.map(option => {
const listEl = document.createElement('li')
listEl.classList.add("item")
listEl.textContent = option;

return listEl
})

ingredientsContainer.append(...elements)