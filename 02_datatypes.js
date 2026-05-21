// ==============================
// PRIMITIVE DATATYPES
// ==============================

// String
let name = "Yash"

// Number
let age = 25

// Boolean
let isLoggedIn = true

// Null
let temperature = null

// Undefined
let state

// Symbol
let id = Symbol('123')

// BigInt
let bigNumber = 12345678901234567890n


// ==============================
// TYPEOF CHECKING
// ==============================

console.log(typeof name)         // string
console.log(typeof age)          // number
console.log(typeof isLoggedIn)   // boolean
console.log(typeof temperature)  // object (famous JS bug)
console.log(typeof state)        // undefined


// ==============================
// NON-PRIMITIVE DATATYPES
// ==============================

// Array
let heroes = ["Ironman", "Thor", "Spiderman"]

// Object
let user = {
    username: "Yash",
    age: 25
}

// Function
function greet() {
    console.log("Hello")
}

console.log(typeof heroes) // object
console.log(typeof user)   // object
console.log(typeof greet)  // function