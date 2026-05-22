// ==========================================
// 📘 OBJECTS IN JAVASCRIPT
// ==========================================

// singleton
// Object.create

// ------------------------------------------
// ✅ Object Literals
// ------------------------------------------

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",

    // Symbol syntax
    [mySym]: "mykey1",

    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// ==========================================
// 📘 Access Object Values
// ==========================================

// console.log(JsUser.email)

// Better for special keys
// console.log(JsUser["email"])

// Needed for space keys
// console.log(JsUser["full name"])

// Access Symbol
// console.log(JsUser[mySym])


// ==========================================
// 📘 Update Values
// ==========================================

JsUser.email = "hitesh@chatgpt.com"


// ------------------------------------------
// ✅ Object.freeze()
// Prevents changes in object
// ------------------------------------------

// Object.freeze(JsUser)

JsUser.email = "hitesh@microsoft.com"

// console.log(JsUser);


// ==========================================
// 📘 Adding Functions in Object
// ==========================================

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


// this => current object reference

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());