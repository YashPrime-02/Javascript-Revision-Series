// ==========================================
// 📘 ARRAYS IN JAVASCRIPT
// ==========================================

// Array = Special variable used to store
// multiple values in a single container.

// Arrays in JavaScript are:
// ✅ Ordered
// ✅ Indexed (starts from 0)
// ✅ Dynamic (size can change)

// ------------------------------------------
// ✅ Basic Array Creation
// ------------------------------------------

const myArr = [0, 1, 2, 3, 4, 5]

// Index positions:
// 0  1  2  3  4  5

// Accessing value using index
// console.log(myArr[1]); // 1


// ------------------------------------------
// ✅ Array with Strings
// ------------------------------------------

const myHeroes = ["shaktiman", "naagraj"]


// ------------------------------------------
// ✅ Another Way to Create Array
// ------------------------------------------

const myArr2 = new Array(1, 2, 3, 4)

// Using Array constructor


// ==========================================
// 📘 IMPORTANT ARRAY METHODS
// ==========================================


// ------------------------------------------
// ✅ push()
// Adds element at the END of array
// ------------------------------------------

// myArr.push(6)
// myArr.push(7)

// Result:
// [0,1,2,3,4,5,6,7]


// ------------------------------------------
// ✅ pop()
// Removes LAST element from array
// ------------------------------------------

// myArr.pop()

// Removes last value


// ------------------------------------------
// ✅ unshift()
// Adds element at START of array
// ------------------------------------------

// myArr.unshift(9)

// Result:
// [9,0,1,2,3,4,5]


// ------------------------------------------
// ✅ shift()
// Removes FIRST element
// ------------------------------------------

// myArr.shift()


// ------------------------------------------
// ✅ includes()
// Checks if value exists
// Returns true or false
// ------------------------------------------

// console.log(myArr.includes(9));


// ------------------------------------------
// ✅ indexOf()
// Gives index position of value
// If value not found => returns -1
// ------------------------------------------

// console.log(myArr.indexOf(3));


// ------------------------------------------
// ✅ join()
// Converts array into string
// ------------------------------------------

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// Important:
// Type of myArr => object
// Type of newArr => string


// ==========================================
// 📘 SLICE vs SPLICE
// VERY IMPORTANT INTERVIEW TOPIC
// ==========================================


// Original Array
console.log("A ", myArr);

// Output:
// A  [0,1,2,3,4,5]


// ------------------------------------------
// ✅ slice(start, end)
// ------------------------------------------

// Returns selected portion of array
// END index is NOT included

const myn1 = myArr.slice(1, 3)

console.log(myn1);

// Output:
// [1,2]

// Index 1 included
// Index 3 NOT included


console.log("B ", myArr);

// Important:
// slice() DOES NOT modify original array

// Output:
// B  [0,1,2,3,4,5]


// ==========================================


// ------------------------------------------
// ✅ splice(start, deleteCount)
// ------------------------------------------

// Removes elements from original array

const myn2 = myArr.splice(1, 3)

console.log("C ", myArr);

// Output:
// C  [0,4,5]

// Because splice removed:
// 1,2,3


console.log(myn2);

// Output:
// [1,2,3]


// ==========================================
// 🔥 MAIN DIFFERENCE
// ==========================================

// slice()
// ❌ Does NOT change original array
// ✅ Returns copied portion

// splice()
// ✅ Changes original array
// ✅ Removes elements from original array


// ==========================================
// 📌 INTERVIEW QUICK REVISION
// ==========================================

// push()     => add at end
// pop()      => remove from end

// unshift()  => add at beginning
// shift()    => remove from beginning

// includes() => check existence
// indexOf()  => find index

// join()     => array to string

// slice()    => no change in original array
// splice()   => modifies original array