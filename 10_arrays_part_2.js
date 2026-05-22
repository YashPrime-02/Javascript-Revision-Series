// ==========================================
// 📘 MERGE ARRAYS
// ==========================================

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// ------------------------------------------
// ✅ push()
// Adds entire array as single element
// ------------------------------------------

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// Output:
// [
//   'thor',
//   'Ironman',
//   'spiderman',
//   ['superman', 'flash', 'batman']
// ]


// Access nested array value
// console.log(marvel_heros[3][1]);

// Output:
// flash


// ------------------------------------------
// ✅ concat()
// Merges arrays and returns new array
// ------------------------------------------

// const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros);


// ------------------------------------------
// ✅ Spread Operator (...)
// Modern and most used method
// ------------------------------------------

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);


// ==========================================
// 📘 flat()
// ==========================================

// Converts nested array into single array

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


// Infinity => flatten all levels

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


// Output:
// [
//   1,2,3,4,5,6,7,6,7,4,5
// ]


// ==========================================
// 📘 Array Utility Methods
// ==========================================


// ------------------------------------------
// ✅ Array.isArray()
// Checks if value is array or not
// ------------------------------------------

console.log(Array.isArray("Hitesh"))

// Output:
// false


// ------------------------------------------
// ✅ Array.from()
// Converts into array
// ------------------------------------------

console.log(Array.from("Hitesh"))

// Output:
// ['H', 'i', 't', 'e', 's', 'h']


// Interesting Case

console.log(Array.from({name: "hitesh"}))

// Output:
// []

// Because we need to specify
// whether keys or values should be converted


// ==========================================
// 📘 Array.of()
// ==========================================

// Creates array from multiple values

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3));

// Output:
// [100, 200, 300]