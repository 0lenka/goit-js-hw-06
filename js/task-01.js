const categoriesEl = document.querySelectorAll('#categories .item')
const numOfCategories = `Number of Categories: ${categoriesEl.length}`;
console.log(numOfCategories)

categoriesEl.forEach(element => {
    const title = element.querySelector('h2')
    const catogoryLength = element.querySelectorAll('ul li').length
    console.log(`Category: ${title.textContent}`)
    console.log(`Elements: ${catogoryLength}`)
})

