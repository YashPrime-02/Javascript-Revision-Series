// ==========================================
// 📘 FOR LOOP IN JAVASCRIPT
// ==========================================


// Syntax:
// for(initialization; condition; increment)


// ==========================================
// 📘 Basic for Loop
// ==========================================

for (let i = 0; i <= 10; i++) {

    const element = i

    if (element == 5) {

        // console.log("5 is best number");
    }

    // console.log(element);
}


// Output:
// 0 to 10 printed


// Important:
// let variables are block scoped

// console.log(element);

// Output:
// ReferenceError


// ==========================================
// 📘 Nested Loop
// ==========================================

for (let i = 1; i <= 10; i++) {

    // console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {

        // console.log(`Inner loop value ${j} and inner loop ${i}`);

        // Multiplication table

        // console.log(i + '*' + j + ' = ' + i*j );
    }
}


// Example Output:
// 2 * 3 = 6
// 5 * 4 = 20


// ==========================================
// 📘 Loop on Array
// ==========================================

let myArray2 = ["flash", "batman", "superman"]


// console.log(myArray2.length);

// Output:
// 3


for (let index = 0; index < myArray2.length; index++) {

    const element = myArray2[index]

    // console.log(element);
}


// Output:
// flash
// batman
// superman


// ==========================================
// 📘 break Statement
// ==========================================

// break stops the loop completely


// for (let index = 1; index <= 20; index++) {

//     if (index == 5) {

//         console.log(`Detected 5`);

//         break
//     }

//     console.log(`Value of i is ${index}`);
// }


// Output:
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5


// ==========================================
// 📘 continue Statement
// ==========================================

// continue skips current iteration


for (let index = 1; index <= 20; index++) {

    if (index == 5) {

        console.log(`Detected 5`);

        continue
    }

    console.log(`Value of i is ${index}`);
}


// Output:
// Prints all values except 5



// ==========================================
// 📘 WHILE & DO WHILE LOOP
// ==========================================


// ==========================================
// 📘 while Loop
// ==========================================

let index = 0

// while (index <= 10) {

//     console.log(`Value of index is ${index}`);

//     index = index + 2
// }


// Output:
// 0
// 2
// 4
// 6
// 8
// 10


// Important:
// Increment/decrement is necessary
// otherwise loop becomes infinite


// ==========================================
// 📘 while Loop with Array
// ==========================================

let myArray3 = ['flash', "batman", "superman"]

let arr = 0


while (arr < myArray3.length) {

    // console.log(`Value is ${myArray3[arr]}`);

    arr = arr + 1
}


// Output:
// Value is flash
// Value is batman
// Value is superman


// ==========================================
// 📘 do while Loop
// ==========================================

// do while runs at least one time
// even if condition is false


let score = 11


do {

    console.log(`Score is ${score}`);

    score++

} while (score <= 10);


// Output:
// Score is 11


// Reason:
// Condition checked after execution



// ==========================================
// 📘 for...of LOOP
// ==========================================


// for...of is used to iterate
// over arrays, strings, maps etc.


// ==========================================
// 📘 for...of with Array
// ==========================================

const arr2 = [1, 2, 3, 4, 5]


for (const num of arr2) {

    // console.log(num);
}


// Output:
// 1
// 2
// 3
// 4
// 5


// ==========================================
// 📘 for...of with String
// ==========================================

const greetings = "Hello world!"


for (const greet of greetings) {

    // console.log(`Each char is ${greet}`)
}


// Output:
// Each char is H
// Each char is e
// ...
// Each char is !


// ==========================================
// 📘 Maps
// ==========================================

// Map stores unique key-value pairs

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// Duplicate keys are not allowed

// console.log(map);


// ==========================================
// 📘 Loop on Map
// ==========================================

for (const [key, value] of map) {

    // console.log(key, ':-', value);
}


// Output:
// IN :- India
// USA :- United States of America
// Fr :- France


// ==========================================
// 📘 for...of on Object
// ==========================================

const myObject = {

    game1: 'NFS',
    game2: 'Spiderman'
}


// for (const [key, value] of myObject) {

//     console.log(key, ':-', value);

// }


// Output:
// TypeError: myObject is not iterable


// Important:
// for...of does NOT work directly on objects



// ==========================================
// 📘 for...in LOOP
// ==========================================


// for...in is mainly used
// for iterating over objects


// ==========================================
// 📘 for...in with Object
// ==========================================

const myObject2 = {

    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


for (const key in myObject2) {

    // console.log(`${key} shortcut is for ${myObject2[key]}`);
}


// Output:
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


// ==========================================
// 📘 for...in with Array
// ==========================================

const programming = ["js", "rb", "py", "java", "cpp"]


for (const key in programming) {

    // console.log(programming[key]);
}


// Output:
// js
// rb
// py
// java
// cpp


// Important:
// for...in gives keys/indexes

// Array indexes:
// 0 1 2 3 4


// ==========================================
// 📘 for...in with Map
// ==========================================

// const map = new Map()

// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// for (const key in map) {

//     console.log(key);

// }


// Output:
// Nothing prints


// Important:
// Maps are not iterable with for...in


// ==========================================
// 📘 forEach LOOP
// ==========================================


// forEach is used to iterate
// over arrays


const coding = ["js", "ruby", "java", "python", "cpp"]


// ==========================================
// 📘 Normal Function Callback
// ==========================================

// coding.forEach( function (val){

//     console.log(val);

// } )


// Output:
// js
// ruby
// java
// python
// cpp


// ==========================================
// 📘 Arrow Function Callback
// ==========================================

// coding.forEach( (item) => {

//     console.log(item);

// } )


// ==========================================
// 📘 Passing Function Reference
// ==========================================

// function printMe(item){

//     console.log(item);
// }

// coding.forEach(printMe)


// Important:
// Only function reference is passed
// Do NOT use printMe()


// ==========================================
// 📘 forEach Parameters
// ==========================================

// coding.forEach( (item, index, arr)=> {

//     console.log(item, index, arr);

// } )


// item  => current value
// index => current index
// arr   => complete array


// ==========================================
// 📘 Array of Objects
// ==========================================

const myCoding = [

    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach( (item) => {

    console.log(item.languageName);

} )


// Output:
// javascript
// java
// python