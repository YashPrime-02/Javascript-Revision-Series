// ==============================
// VAR, LET, CONST
// ==============================

// var -> old way (avoid mostly)
var accountName = "Yash"

// let -> value can change
let accountEmail = "yash@gmail.com"

// const -> value cannot change
const accountId = 12345

// Reassigning let
accountEmail = "new@gmail.com"

// Reassigning const ❌
// accountId = 999

console.log(accountName)
console.log(accountEmail)
console.log(accountId)


// ==============================
// Scope Difference
// ==============================

if (true) {
    var a = 10
    let b = 20
    const c = 30
}

console.log(a) // works

// console.log(b) ❌
// console.log(c) ❌


// ==============================
// WHY VAR IS AVOIDED
// ==============================

// var ignores block scope

var test = 100

if (true) {
    var test = 200
}

console.log(test) // 200 (unexpected sometimes)


// let is safer

let value = 50

if (true) {
    let value = 100
    console.log(value) // 100
}

console.log(value) // 50