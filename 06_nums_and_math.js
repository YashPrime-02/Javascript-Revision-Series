
// ==========================================================
// NUMBER DECLARATION
// ==========================================================

// Normal number
const score = 400

console.log(score) // 400


// ==========================================================
// NUMBER OBJECT
// ==========================================================

// Creating number using Number object
const balance = new Number(100)

console.log(balance) // [Number: 100]

/*
Normally numbers are primitive types.

But using:
new Number()

creates a Number object.
*/


// ==========================================================
// toString()
// ==========================================================

// Converts number to string
console.log(balance.toString()) // "100"

/*
Useful when:
- checking string length
- concatenation
- formatting data
*/


// checking string length after conversion
console.log(balance.toString().length) // 3


// ==========================================================
// toFixed()
// ==========================================================

// controls decimal places
console.log(balance.toFixed(1)) // 100.0

/*
Mostly used in:
- prices
- ecommerce
- billing systems
- decimal formatting
*/


// ==========================================================
// toPrecision()
// ==========================================================

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)) // 123.9

/*
toPrecision()
returns precise number length.

It rounds values accordingly.
*/


// ==========================================================
// LARGE NUMBER FORMATTING
// ==========================================================

const hundreds = 1000000

console.log(hundreds.toLocaleString()) // 1,000,000

/*
Adds commas based on region format.
*/


// Indian number system
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000


// ==========================================================
// MATH OBJECT
// ==========================================================

console.log(Math)

/*
Math is a built-in JavaScript object
used for mathematical operations.
*/


// ==========================================================
// Math.abs()
// ==========================================================

console.log(Math.abs(-4)) // 4

/*
abs = absolute value

Converts negative to positive.
*/


// ==========================================================
// Math.round()
// ==========================================================

console.log(Math.round(4.6)) // 5

/*
Rounds to nearest integer.
*/


// ==========================================================
// Math.ceil()
// ==========================================================

console.log(Math.ceil(4.2)) // 5

/*
Always rounds UP.
*/


// ==========================================================
// Math.floor()
// ==========================================================

console.log(Math.floor(4.9)) // 4

/*
Always rounds DOWN.
*/


// ==========================================================
// Math.min() & Math.max()
// ==========================================================

console.log(Math.min(4, 3, 6, 8)) // 3
console.log(Math.max(4, 3, 6, 8)) // 8


// ==========================================================
// Math.random()
// ==========================================================

console.log(Math.random())

/*
Generates random value between:

0 and 1

Examples:
0.123
0.873
0.452
*/


// random number multiplied
console.log((Math.random() * 10) + 1)

/*
Multiply by 10
to shift range.

+1 avoids getting 0.
*/


// removing decimal values
console.log(Math.floor(Math.random() * 10) + 1)

/*
Math.floor()
removes decimal part.
*/


// ==========================================================
// RANDOM NUMBER BETWEEN MIN & MAX
// ==========================================================

const min = 10
const max = 20

console.log(
    Math.floor(Math.random() * (max - min + 1)) + min
)

/*

FORMULA:

Math.floor(Math.random() * (max - min + 1)) + min


Explanation:

1. Math.random()
   => random decimal between 0 and 1

2. (max - min + 1)
   => total range count

3. multiply random value by range

4. Math.floor()
   => removes decimals

5. + min
   => shifts range to desired minimum


Final Output:
Random number between 10 and 20

*/


// ==========================================================
// REAL WORLD USE CASES
// ==========================================================

/*

Math.random()
Used in:
- OTP generation
- Dice games
- Password generators
- Random colors
- Game mechanics

toFixed()
Used in:
- Currency values
- Billing systems
- Financial calculations

toLocaleString()
Used in:
- Banking apps
- Dashboards
- Data formatting

*/


// ==========================================================
// INTERVIEW NOTES
// ==========================================================

/*

1. typeof NaN => number

2. Math.random()
   always gives value between 0 and 1

3. Math.floor()
   rounds downward

4. Math.ceil()
   rounds upward

5. toFixed()
   returns STRING in many cases

6. Number object and primitive number
   are different internally

*/


// ==========================================================
// QUICK REVISION SUMMARY
// ==========================================================

/*

toString()
=> number to string

toFixed()
=> fixed decimal values

toPrecision()
=> precise formatting

toLocaleString()
=> formatted commas

Math.abs()
=> absolute value

Math.round()
=> nearest integer

Math.ceil()
=> round up

Math.floor()
=> round down

Math.random()
=> random decimal between 0 and 1

*/