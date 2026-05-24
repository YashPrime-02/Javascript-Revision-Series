// ==========================================
// 📘 IF ELSE & CONDITIONS
// ==========================================


// ==========================================
// 📘 Basic if Condition
// ==========================================

const isUserloggedIn = true
const temperature = 41


// if ( temperature === 40 ){

//     console.log("less than 50");

// } else {

//     console.log("temperature is greater than 50");
// }


// Output:
// temperature is greater than 50


// ==========================================
// 📘 Comparison Operators
// ==========================================

// <   less than
// >   greater than

// <=  less than equal to
// >=  greater than equal to

// ==  checks value only
// === checks value + datatype

// !=  not equal
// !== strict not equal


// ==========================================
// 📘 Block Scope
// ==========================================

// const score = 200

// if (score > 100) {

//     let power = "fly"

//     console.log(`User power: ${power}`);
// }


// console.log(`User power: ${power}`);


// Output:
// ReferenceError

// Because let is block scoped


// ==========================================
// 📘 Single Line if
// ==========================================

// const balance = 1000

// if (balance > 500)
// console.log("test"), console.log("test2");


// Output:
// test
// test2


// ==========================================
// 📘 else if Ladder
// ==========================================

// if (balance < 500) {

//     console.log("less than 500");

// } else if (balance < 750) {

//     console.log("less than 750");

// } else if (balance < 900) {

//     console.log("less than 900");

// } else {

//     console.log("less than 1200");
// }


// Output:
// less than 1200


// ==========================================
// 📘 Logical AND (&&)
// ==========================================

const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard && 2 == 3) {

    console.log("Allow to buy course");
}


// Output:
// Nothing prints

// Because all conditions must be true


// ==========================================
// 📘 Logical OR (||)
// ==========================================

if (loggedInFromGoogle || loggedInFromEmail) {

    console.log("User logged in");
}


// Output:
// User logged in

// Because one condition is true