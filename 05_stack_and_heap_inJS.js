// ==========================================================
// JAVASCRIPT STACK & HEAP MEMORY
// Chai aur Code Revision Notes + Deep Comments
// ==========================================================


// ==========================================================
// MEMORY TYPES IN JAVASCRIPT
// ==========================================================

/*

JavaScript mainly uses 2 types of memory:

1. Stack Memory
2. Heap Memory

-----------------------------------

STACK:
- Used by Primitive Datatypes
- Gives COPY of value

HEAP:
- Used by Non-Primitive Datatypes
- Gives REFERENCE of original value

*/


// ==========================================================
// PRIMITIVE DATATYPES → STACK MEMORY
// ==========================================================

/*

Primitive Types:
- String
- Number
- Boolean
- null
- undefined
- Symbol
- BigInt

These are stored in STACK memory.

When assigned to another variable,
a COPY is created.

*/


let myYoutubeName = "hiteshchaudhary"

let anotherName = myYoutubeName

// changing copied value
anotherName = "chaiAurCode"

console.log(myYoutubeName) // hiteshchaudhary
console.log(anotherName) // chaiAurCode


/*
IMPORTANT:

anotherName received a COPY.

So changing anotherName
does NOT affect original variable.

Memory Visualization:

STACK MEMORY

myYoutubeName  → "hiteshchaudhary"

anotherName    → "chaiAurCode"

Both are separate values.

*/


// ==========================================================
// NON-PRIMITIVE DATATYPES → HEAP MEMORY
// ==========================================================

/*

Non-Primitive Types:
- Object
- Array
- Function

These are stored in HEAP memory.

Variables do NOT get actual copy.
They get REFERENCE to original object.

*/


let userOne = {
    email: "yash@gmail.com",
    upi: "yash@ybl"
}


// userTwo gets reference
let userTwo = userOne


// changing value using userTwo
userTwo.email = "new@gmail.com"


console.log(userOne.email) // new@gmail.com
console.log(userTwo.email) // new@gmail.com


/*
IMPORTANT:

Both variables point to SAME object.

So changing through one variable
affects the original object too.

Memory Visualization:

STACK MEMORY

userOne  ───────┐
                │
userTwo  ───────┘


HEAP MEMORY

{
   email: "new@gmail.com",
   upi: "yash@ybl"
}

*/


// ==========================================================
// WHY THIS IS IMPORTANT
// ==========================================================

/*

This concept is EXTREMELY important in:

- React state management
- Object cloning
- API response handling
- Arrays & objects
- Redux
- Performance optimization

Many bugs happen because developers
accidentally mutate original objects.

*/


// ==========================================================
// REAL WORLD CONFUSION EXAMPLE
// ==========================================================

let playerOne = {
    username: "Yash",
    score: 100
}

let playerTwo = playerOne

playerTwo.score = 500

console.log(playerOne.score) // 500
console.log(playerTwo.score) // 500


/*
Even though we changed playerTwo,
playerOne also changed.

Because BOTH share same heap reference.

*/


// ==========================================================
// HOW TO CREATE REAL COPY OF OBJECT
// ==========================================================

let originalUser = {
    name: "Yash",
    age: 25
}


// spread operator creates shallow copy
let copiedUser = { ...originalUser }

copiedUser.name = "Prime"

console.log(originalUser.name) // Yash
console.log(copiedUser.name) // Prime


/*
Now changes do NOT affect original object.

Because new object was created.

*/


// ==========================================================
// QUICK DIFFERENCE TABLE
// ==========================================================

/*

STACK MEMORY
-------------
- Used by Primitive Types
- Stores actual value
- Gives copy
- Faster
- Independent values


HEAP MEMORY
------------
- Used by Reference Types
- Stores objects/arrays/functions
- Gives reference
- Shared memory location
- Changes affect original data

*/


// ==========================================================
// INTERVIEW NOTES
// ==========================================================

/*

1. Primitive types use STACK memory.

2. Non-primitive/reference types use HEAP memory.

3. Stack gives COPY.

4. Heap gives REFERENCE.

5. Objects and arrays are mutable
   because references point to same memory.

6. Spread operator (...obj)
   helps create copies.

7. typeof array => object

*/


// ==========================================================
// QUICK REVISION SUMMARY
// ==========================================================

/*

Primitive → Stack → Copy

Non-Primitive → Heap → Reference

Primitive change:
Original stays safe

Reference change:
Original also changes

*/