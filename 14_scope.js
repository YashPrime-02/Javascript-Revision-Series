// ==========================================
// 📘 SCOPE IN JAVASCRIPT
// ==========================================


// var has global scope issues
// let and const are block scoped


// var c = 300

let a = 300


// ==========================================
// 📘 Block Scope
// ==========================================

if (true) {

    // Different variable inside block

    let a = 10
    const b = 20

    // console.log("INNER: ", a);

    // Output:
    // INNER: 10
}


// Outside block

// console.log(a);

// Output:
// 300


// console.log(b);

// Output:
// ReferenceError: b is not defined


// console.log(c);


// ==========================================
// 📘 Nested Functions (Lexical Scope)
// ==========================================

function one(){

    const username = "hitesh"


    function two(){

        const website = "youtube"

        // Child function can access parent variables

        console.log(username);

        // Output:
        // hitesh
    }


    // Parent cannot access child variables

    // console.log(website);

    // Output:
    // ReferenceError

    two()
}


// one()


// ==========================================
// 📘 Nested if Scope
// ==========================================

if (true) {

    const username = "hitesh"

    if (username === "hitesh") {

        const website = " youtube"

        // console.log(username + website);

        // Output:
        // hitesh youtube
    }

    // console.log(website);

    // Output:
    // ReferenceError
}


// console.log(username);

// Output:
// ReferenceError


// ==========================================
// 📘 FUNCTION HOISTING
// ==========================================


// ------------------------------------------
// ✅ Function Declaration
// Can be called before declaration
// ------------------------------------------

console.log(addone(5))

// Output:
// 6


function addone(num){

    return num + 1
}


// Reason:
// Function declarations are hoisted
// completely in memory


// ==========================================


// ------------------------------------------
// ❌ Function Expression
// Cannot be called before declaration
// ------------------------------------------

addTwo(5)


const addTwo = function(num){

    return num + 2
}


// Output:
// ReferenceError:
// Cannot access 'addTwo' before initialization


// Reason:
// Variable is hoisted,
// but function is not initialized yet