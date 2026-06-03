// ==========================================
// 📘 PROTOTYPE & INHERITANCE
// ==========================================


// let myName = "hitesh     "
// let mychannel = "chai     "


// console.log(myName.trueLength());


// ==========================================
// 📘 Arrays & Objects
// ==========================================

let myHeros = ["thor", "spiderman"]


let heroPower = {

    thor: "hammer",

    spiderman: "sling",


    getSpiderPower: function(){

        console.log(
            `Spidy power is ${this.spiderman}`
        );
    }
}


// ==========================================
// 📘 Adding Method to Object Prototype
// ==========================================

// Every object gets access
// to this method

Object.prototype.hitesh = function(){

    console.log(
        `hitesh is present in all objects`
    );
}


// ==========================================
// 📘 Adding Method to Array Prototype
// ==========================================

// Only arrays can access this

Array.prototype.heyHitesh = function(){

    console.log(`Hitesh says hello`);
}


// ==========================================
// 📘 Prototype Access
// ==========================================

// heroPower.hitesh()

// myHeros.hitesh()


// Both work because arrays are also objects


// myHeros.heyHitesh()

// Works because myHeros is array


// heroPower.heyHitesh()

// ❌ Error
// because heroPower is object,
// not array


// ==========================================
// 📘 Inheritance
// ==========================================

const User = {

    name: "chai",

    email: "chai@google.com"
}


const Teacher = {

    makeVideo: true
}


const TeachingSupport = {

    isAvailable: false
}


const TASupport = {

    makeAssignment: 'JS assignment',

    fullTime: true,

    __proto__: TeachingSupport
}


// Teacher inherits User

Teacher.__proto__ = User


// ==========================================
// 📘 Modern Syntax
// ==========================================

// TeachingSupport inherits Teacher

Object.setPrototypeOf(
    TeachingSupport,
    Teacher
)


// ==========================================
// 📘 String Prototype
// ==========================================

let anotherUsername = "ChaiAurCode     "


// Add custom method to string

String.prototype.trueLength = function(){

    console.log(`${this}`);

    console.log(
        `True length is: ${this.trim().length}`
    );
}


// trim() removes extra spaces


// ==========================================
// 📘 Calling Custom Method
// ==========================================

anotherUsername.trueLength()


// Output:
// ChaiAurCode
// True length is: 11


"hitesh".trueLength()


// Output:
// hitesh
// True length is: 6


"iceTea".trueLength()


// Output:
// iceTea
// True length is: 6


// ==========================================
// 📘 Important Concepts
// ==========================================

// prototype
// => mechanism for inheritance


// Object.prototype
// => available to all objects


// Array.prototype
// => available only to arrays


// String.prototype
// => available only to strings


// Object.setPrototypeOf()
// => modern inheritance syntax