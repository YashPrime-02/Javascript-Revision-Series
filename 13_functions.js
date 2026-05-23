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


// Function execution

// sayMyName()


// ==========================================
// 📘 Function Parameters & Arguments
// ==========================================

// number1 and number2 => parameters

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){

    // Store result in variable

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

    // Check if username exists

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


// val1 = 200
// val2 = 400
// Remaining values go into num1 array

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