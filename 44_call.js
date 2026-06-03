// ==========================================
// 📘 call() IN JAVASCRIPT
// ==========================================


// call() is used to explicitly
// set value of this


// ==========================================
// 📘 Parent Function
// ==========================================

function SetUsername(username){

    // Imagine complex DB operations here

    this.username = username

    console.log("called");
}


// ==========================================
// 📘 Child Function
// ==========================================

function createUser(username, email, password){


    // ==========================================
    // 📘 call(this)
    // ==========================================

    // call() passes current this
    // to another function

    SetUsername.call(this, username)


    this.email = email

    this.password = password
}


// ==========================================
// 📘 Object Creation
// ==========================================

const chai = new createUser(

    "chai",

    "chai@fb.com",

    "123"
)

console.log(chai);


// ==========================================
// 📘 Output
// ==========================================

// called

// createUser {
//     username: 'chai',
//     email: 'chai@fb.com',
//     password: '123'
// }


// ==========================================
// 📘 Why call(this)?
// ==========================================

// Without call(this):

// SetUsername(username)


// this inside SetUsername
// would NOT refer to createUser object


// So username would not
// properly attach to object


// ==========================================
// 📘 Important Concepts
// ==========================================

// call()
// => Immediately invokes function


// call(this, value)
// => sets current object context


// this
// => current execution object


// new keyword
// => creates new object instance