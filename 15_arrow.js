// ==========================================
// 📘 THIS KEYWORD & ARROW FUNCTIONS
// ==========================================


// ==========================================
// 📘 this inside Object
// ==========================================

const user = {

    username: "hitesh",
    price: 999,

    welcomeMessage: function() {

        console.log(`${this.username} , welcome to website`);

        // this => current object

        console.log(this);
    }

}


// user.welcomeMessage()


// Change object value

// user.username = "sam"

// user.welcomeMessage()


// ==========================================
// 📘 Global this
// ==========================================

// console.log(this)

// In browser:
// this refers to window object


// ==========================================
// 📘 this inside Normal Function
// ==========================================

// function chai(){

//     let username = "hitesh"

//     console.log(this.username);
// }

// chai()


// Result:
// undefined

// this does not work properly
// for local variables inside functions


// ==========================================
// 📘 this inside Function Expression
// ==========================================

// const chai = function () {

//     let username = "hitesh"

//     console.log(this.username);
// }


// ==========================================
// 📘 Arrow Function
// ==========================================

const chai = () => {

    let username = "hitesh"

    console.log(this);
}


// chai()


// Arrow functions do not have
// their own this


// ==========================================
// 📘 Arrow Function Syntax
// ==========================================


// ------------------------------------------
// ✅ Explicit Return
// ------------------------------------------

// const addTwo = (num1, num2) => {

//     return num1 + num2
// }


// ------------------------------------------
// ✅ Implicit Return
// ------------------------------------------

// const addTwo = (num1, num2) => num1 + num2


// Parentheses also work

// const addTwo = (num1, num2) => ( num1 + num2 )


// ==========================================
// 📘 Returning Object from Arrow Function
// ==========================================

// Object must be wrapped in ()

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// Output:
// { username: 'hitesh' }


// ==========================================
// 📘 forEach Example
// ==========================================

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()