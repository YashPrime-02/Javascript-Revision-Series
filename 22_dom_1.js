// ==========================================
// 📘 DOM Selectors
// ==========================================


// Select element by id

document.getElementById('title')


// Select element by class

document.getElementsByClassName('list-item')


// Select first matching element

document.querySelector('h2')


// Select all matching elements

document.querySelectorAll('h2')


// ==========================================
// 📘 Changing Content
// ==========================================

const title = document.getElementById('title')


// Change text

title.innerText = "Hello DOM"


// Get visible text only

console.log(title.innerText)


// Get complete text including hidden

console.log(title.textContent)


// Get HTML content

console.log(title.innerHTML)


// ==========================================
// 📘 Styling with JS
// ==========================================

title.style.color = "yellow"

title.style.backgroundColor = "black"

title.style.padding = "15px"

title.style.borderRadius = "10px"


// ==========================================
// 📘 querySelector Examples
// ==========================================

// Select input

document.querySelector('input')


// Select password input

document.querySelector('input[type="password"]')


// Select first li

document.querySelector('li')


// ==========================================
// 📘 querySelectorAll
// ==========================================

const tempLiList = document.querySelectorAll('li')


// Access using index

tempLiList[0].style.color = "green"


// ==========================================
// 📘 Loop on NodeList
// ==========================================

tempLiList.forEach( (item) => {

    item.style.backgroundColor = "grey"
})