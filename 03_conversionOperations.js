
// ==========================================================
// NUMBER CONVERSION
// ==========================================================

// String value
let score = "33"

// Converting string to number
let valueInNumber = Number(score)

console.log(valueInNumber) // 33
console.log(typeof valueInNumber) // number


// ==========================================================
// INVALID NUMBER CONVERSION (NaN CASE)
// ==========================================================

// String contains characters
let score2 = "33abc"

// Conversion attempt
let value2 = Number(score2)

console.log(value2) // NaN
console.log(typeof value2) // number

/*
IMPORTANT:
NaN = Not a Number

But surprisingly:
typeof NaN => "number"

This is one of JavaScript's confusing behaviors.
*/


// ==========================================================
// NULL CONVERSION
// ==========================================================

console.log(Number(null)) // 0

/*
null is treated as an empty value,
so JS converts it to 0.
*/


// ==========================================================
// UNDEFINED CONVERSION
// ==========================================================

console.log(Number(undefined)) // NaN

/*
undefined means value does not exist,
so conversion fails.
*/


// ==========================================================
// BOOLEAN TO NUMBER CONVERSION
// ==========================================================

console.log(Number(true)) // 1
console.log(Number(false)) // 0

/*
true  => 1
false => 0
*/


// ==========================================================
// STRING TO BOOLEAN CONVERSION
// ==========================================================

console.log(Boolean("")) // false
console.log(Boolean("Yash")) // true

/*
Empty string => false
Non-empty string => true
*/


// ==========================================================
// NUMBER TO BOOLEAN CONVERSION
// ==========================================================

console.log(Boolean(1)) // true
console.log(Boolean(0)) // false

/*
0 => false
Any non-zero number => true
*/


// ==========================================================
// STRING CONVERSION
// ==========================================================

let someNumber = 100

// Convert number to string
let stringNumber = String(someNumber)

console.log(stringNumber) // "100"
console.log(typeof stringNumber) // string


// ==========================================================
// BASIC OPERATIONS
// ==========================================================

console.log(2 + 2) // Addition
console.log(2 - 2) // Subtraction
console.log(2 * 2) // Multiplication
console.log(2 / 2) // Division
console.log(2 % 2) // Modulus (remainder)
console.log(2 ** 3) // Power (2^3 = 8)


// ==========================================================
// STRING + NUMBER CONFUSION
// ==========================================================

console.log("1" + 2) // "12"
console.log(1 + "2") // "12"

/*
If string is involved,
JavaScript usually converts everything to string.
*/


console.log("1" + 2 + 2) // "122"

/*
Step 1:
"1" + 2 => "12"

Step 2:
"12" + 2 => "122"
*/


console.log(1 + 2 + "2") // "32"

/*
Step 1:
1 + 2 => 3

Step 2:
3 + "2" => "32"
*/


// ==========================================================
// PREFIX & POSTFIX OPERATORS
// ==========================================================

let gameCounter = 100

gameCounter++

console.log(gameCounter) // 101

/*
++ increases value by 1
*/


// ==========================================================
// PREFIX VS POSTFIX
// ==========================================================

let x = 3
let y = x++

console.log(x) // 4
console.log(y) // 3

/*
POSTFIX:
First use value
Then increase
*/


let a = 3
let b = ++a

console.log(a) // 4
console.log(b) // 4

/*
PREFIX:
First increase
Then use value
*/


// ==========================================================
// EXTRA IMPORTANT INTERVIEW NOTES
// ==========================================================

/*

1. typeof null => "object"
   (historical JavaScript bug)

2. NaN means "Not a Number"
   but typeof NaN => "number"

3. Empty string => false
   Non-empty string => true

4. Prefer let and const over var

5. JavaScript performs implicit conversion automatically,
   which can create unexpected results.

6. Always check data coming from:
   - Forms
   - APIs
   - User input
   - Backend responses

because datatype mismatch is very common.

*/


// ==========================================================
// QUICK REVISION SUMMARY
// ==========================================================

/*

Number()
=> Converts into number

Boolean()
=> Converts into true/false

String()
=> Converts into string

null => 0
undefined => NaN

true => 1
false => 0

"" => false
"hello" => true

*/