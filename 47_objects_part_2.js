// ==========================================
// 📘 PROPERTY DESCRIPTORS
// ==========================================


// Property descriptors tell us
// how a property behaves


// ==========================================
// 📘 Math.PI Descriptor
// ==========================================

const descripter = Object.getOwnPropertyDescriptor(

    Math,

    "PI"
)


// console.log(descripter)


// Output:

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }


// ==========================================
// 📘 Why Math.PI Cannot Change
// ==========================================

// console.log(Math.PI)

// Math.PI = 5

// console.log(Math.PI)


// Output:

// 3.141592653589793

// 3.141592653589793


// Because writable = false


// ==========================================
// 📘 Custom Object
// ==========================================

const chai = {

    name: 'ginger chai',

    price: 250,

    isAvailable: true,


    orderChai: function(){

        console.log("chai nhi bni");
    }
}


// ==========================================
// 📘 Get Property Descriptor
// ==========================================

console.log(

    Object.getOwnPropertyDescriptor(

        chai,

        "name"
    )
)


// Output:

// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }


// ==========================================
// 📘 defineProperty()
// ==========================================

// Used to modify property behavior

Object.defineProperty(

    chai,

    'name',

    {

        // writable: false,

        enumerable: true,
    }
)


// ==========================================
// 📘 Check Updated Descriptor
// ==========================================

console.log(

    Object.getOwnPropertyDescriptor(

        chai,

        "name"
    )
)


// ==========================================
// 📘 Object.entries()
// ==========================================

// Converts object into
// array of key-value pairs

for (let [key, value] of Object.entries(chai)) {


    // Skip functions

    if (typeof value !== 'function') {

        console.log(`${key} : ${value}`);
    }
}


// Output:

// name : ginger chai

// price : 250

// isAvailable : true


// orderChai skipped because
// it is a function


// ==========================================
// 📘 Important Descriptor Properties
// ==========================================

// value
// => actual property value


// writable
// => can value be changed?


// enumerable
// => appears in loops or Object.entries()


// configurable
// => can descriptor be modified
//    or property deleted?