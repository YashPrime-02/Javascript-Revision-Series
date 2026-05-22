

// ==========================================================
// STRING DECLARATION
// ==========================================================

const name = "hitesh"
const repoCount = 50


// ==========================================================
// OLD STRING CONCATENATION
// ==========================================================

// old way
// console.log(name + repoCount + " Value")

/*
Problems with old style:
- hard to read
- messy for large strings
- less modern
*/


// ==========================================================
// TEMPLATE LITERALS (MODERN WAY)
// ==========================================================

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

/*

Template literals use:
(backticks) ` `

Benefits:
- cleaner syntax
- supports variables directly
- supports multiline strings

${variable}
=> interpolation

*/


// ==========================================================
// STRING OBJECT
// ==========================================================

const gameName = new String('hitesh-hc-com')

console.log(gameName)

/*
Creates string as an object.

Normally strings are primitive values,
but JavaScript temporarily wraps them
with String object methods.
*/


// ==========================================================
// ACCESSING CHARACTERS
// ==========================================================

console.log(gameName[0]) // h

/*
String indexing starts from 0.
*/


// ==========================================================
// PROTOTYPE
// ==========================================================

console.log(gameName.__proto__)

/*
Prototype contains built-in methods like:
- slice()
- substring()
- trim()
- includes()

Most string functionality comes from prototype.
*/


// ==========================================================
// STRING LENGTH
// ==========================================================

console.log(gameName.length) // 14

/*
length returns total characters.
*/


// ==========================================================
// toUpperCase()
// ==========================================================

console.log(gameName.toUpperCase())

/*
Converts string to uppercase.

Original string does NOT change
because strings are immutable.
*/


// ==========================================================
// charAt()
// ==========================================================

console.log(gameName.charAt(2)) // t

/*
Returns character at given index.
*/


// ==========================================================
// indexOf()
// ==========================================================

console.log(gameName.indexOf('t')) // 2

/*
Returns first occurrence index.

If not found:
returns -1
*/


// ==========================================================
// substring()
// ==========================================================

const newString = gameName.substring(0, 4)

console.log(newString) // hite

/*

substring(start, end)

- start included
- end excluded

Does NOT support negative values.

*/


// ==========================================================
// slice()
// ==========================================================

const anotherString = gameName.slice(-8, 4)

console.log(anotherString)

/*

slice() supports negative indexes.

Negative index means:
start counting from end.

More flexible than substring().

*/


// ==========================================================
// trim()
// ==========================================================

const newStringOne = "   hitesh    "

console.log(newStringOne)
console.log(newStringOne.trim())

/*
trim() removes extra spaces
from start and end.

Very useful for:
- form inputs
- authentication
- validations

*/


// ==========================================================
// replace()
// ==========================================================

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

/*
replace(oldValue, newValue)

Used to replace parts of string.
*/


// ==========================================================
// includes()
// ==========================================================

console.log(url.includes('sundar')) // false

/*
Checks whether string exists or not.

Returns:
true / false
*/


// ==========================================================
// split()
// ==========================================================

console.log(gameName.split('-'))

/*
split(separator)

Converts string into array.

"hitesh-hc-com"

becomes:

['hitesh', 'hc', 'com']

*/


// ==========================================================
// REAL WORLD USE CASES
// ==========================================================

/*

trim()
=> Login forms

replace()
=> URL cleanup

includes()
=> Search/filter features

split()
=> CSV parsing
=> Tags
=> URL parsing

Template literals
=> Dynamic UI rendering

*/


// ==========================================================
// INTERVIEW NOTES
// ==========================================================

/*

1. Strings are immutable in JavaScript.

2. String indexing starts from 0.

3. substring()
   does NOT support negative indexes.

4. slice()
   supports negative indexes.

5. trim()
   removes spaces only from ends.

6. includes()
   returns boolean.

7. split()
   converts string into array.

*/


// ==========================================================
// QUICK REVISION SUMMARY
// ==========================================================

/*

Template literals
=> cleaner string interpolation

charAt()
=> character at index

indexOf()
=> position of character

substring()
=> extract string

slice()
=> extract string with negative support

trim()
=> remove extra spaces

replace()
=> replace value

includes()
=> check existence

split()
=> string to array

*/