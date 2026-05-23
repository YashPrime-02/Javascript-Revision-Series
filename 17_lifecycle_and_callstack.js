// ==========================================
// 📘 JAVASCRIPT EXECUTION CONTEXT
// ==========================================


// JavaScript runs code in 2 phases:

// 1️⃣ Memory Creation Phase
// 2️⃣ Execution Phase


// ==========================================
// 📘 Example Code
// ==========================================

let val1 = 10
let val2 = 5

function addNum(num1, num2){

    let total = num1 + num2

    return total
}

let result1 = addNum(val1, val2)

let result2 = addNum(10, 2)


// ==========================================
// 📘 STEP 1 : Global Execution
// ==========================================

// Global execution context gets created

// this keyword is also allocated

// Browser:
// this => window object


// ==========================================
// 📘 STEP 2 : Memory Creation Phase
// ==========================================

// In this phase,
// variables get memory space

// val1 => undefined
// val2 => undefined

// addNum => function definition

// result1 => undefined
// result2 => undefined


// Only memory allocation happens here
// Code is NOT executed yet


// ==========================================
// 📘 STEP 3 : Execution Phase
// ==========================================

// val1 => 10
// val2 => 5


// Function call:
// addNum(val1, val2)


// ==========================================
// 📘 New Execution Context for Function
// ==========================================

// Every function creates:

// ✅ New Variable Environment
// ✅ Execution Thread


// For addNum(10, 5)

// num1 => 10
// num2 => 5

// total => 15

// Returns 15 to result1


// result1 => 15


// ==========================================
// 📘 Second Function Call
// ==========================================

// addNum(10, 2)


// New execution context created again

// num1 => 10
// num2 => 2

// total => 12

// Returns 12 to result2


// result2 => 12


// ==========================================
// 📘 Important Point
// ==========================================

// After function execution completes,
// its execution context gets deleted


// ==========================================
// 📘 FINAL OUTPUT VALUES
// ==========================================

// val1 => 10
// val2 => 5

// result1 => 15
// result2 => 12


// ==========================================
// 📘 CALL STACK EXAMPLE
// ==========================================


// JavaScript uses Call Stack
// to manage function execution


function one(){

    console.log("one");

    two()
}


function two(){

    console.log("two");

    three()
}


function three(){

    console.log("three");
}


// Function call

one()


// ==========================================
// 📘 CALL STACK FLOW
// ==========================================

// Step 1:
// one() enters call stack

// Stack:
// one()


// Step 2:
// two() called inside one()

// Stack:
// one()
// two()


// Step 3:
// three() called inside two()

// Stack:
// one()
// two()
// three()


// ==========================================
// 📘 EXECUTION
// ==========================================

// three() executes first

// Output:
// three


// three() removed from stack

// Stack:
// one()
// two()


// two() completes and removed

// Stack:
// one()


// one() completes and removed

// Stack becomes empty


// ==========================================
// 📘 FINAL OUTPUT
// ==========================================

// one
// two
// three