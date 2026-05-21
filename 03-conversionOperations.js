// ==============================
// NUMBER CONVERSION
// ==============================

let score = "33"

let valueInNumber = Number(score)

console.log(valueInNumber)       // 33
console.log(typeof valueInNumber) // number


// ==============================
// NaN CASE
// ==============================

let score2 = "33abc"

let value2 = Number(score2)

console.log(value2) // NaN
console.log(typeof value2) // number


// ==============================
// NULL CONVERSION
// ==============================

console.log(Number(null)) // 0


// ==============================
// UNDEFINED CONVERSION
// ==============================

console.log(Number(undefined)) // NaN


// ==============================
// BOOLEAN TO NUMBER
// ==============================

console.log(Number(true))  // 1
console.log(Number(false)) // 0


// ==============================
// BOOLEAN CONVERSION
// ==============================

console.log(Boolean(1)) // true
console.log(Boolean(0)) // false

console.log(Boolean("")) // false
console.log(Boolean("Yash")) // true


// ==============================
// STRING CONVERSION
// ==============================

let someNumber = 100

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)


// ==============================
// OPERATIONS
// ==============================

console.log(2 + 2)
console.log(2 - 2)
console.log(2 * 2)
console.log(2 / 2)
console.log(2 % 2)
console.log(2 ** 3)


// ==============================
// STRING + NUMBER CONFUSION
// ==============================

console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32


// ==============================
// PREFIX & POSTFIX
// ==============================

let gameCounter = 100

gameCounter++

console.log(gameCounter) // 101