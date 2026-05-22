// ==========================================
// 📘 FUNCTIONS IN JAVASCRIPT
// ==========================================


// ------------------------------------------
// ✅ Simple Function
// ------------------------------------------

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// Function call

// sayMyName()


// ==========================================
// 📘 Function with Parameters
// ==========================================

// number1 and number2 => parameters

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    return number1 + number2
}


// 3 and 5 => arguments

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


// ==========================================
// 📘 Default Parameters
// ==========================================

function loginUserMessage(username = "sam"){

    // If username not provided

    if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}


// console.log(loginUserMessage("hitesh"))


// ==========================================
// 📘 Rest Operator (...)
// ==========================================

function calculateCartPrice(val1, val2, ...num1){
    return num1
}


// First two values go into val1 & val2
// Remaining values stored in num1 array

// console.log(calculateCartPrice(200, 400, 500, 2000))


// ==========================================
// 📘 Passing Object in Function
// ==========================================

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){

    console.log(
        `Username is ${anyobject.username} and price is ${anyobject.price}`
    );
}


// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})


// ==========================================
// 📘 Passing Array in Function
// ==========================================

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){

    return getArray[1]
}


// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));


// Output:
// 400