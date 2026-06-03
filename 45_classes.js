// ==========================================
// 📘 CLASSES IN JAVASCRIPT
// ==========================================


// ES6 introduced class syntax


// ==========================================
// 📘 Class Creation
// ==========================================

class User {

    // Constructor runs automatically
    // when object is created

    constructor(username, email, password){

        this.username = username;

        this.email = email;

        this.password = password
    }


    // Class methods

    encryptPassword(){

        return `${this.password}abc`
    }


    changeUsername(){

        return `${this.username.toUpperCase()}`
    }

}


// ==========================================
// 📘 Object Creation
// ==========================================

const chai = new User(

    "chai",

    "chai@gmail.com",

    "123"
)


// Call methods

console.log(chai.encryptPassword());


// Output:
// 123abc


console.log(chai.changeUsername());


// Output:
// CHAI


// ==========================================
// 📘 Behind the Scenes
// ==========================================

// Classes internally work
// using prototype


function User(username, email, password){

    this.username = username;

    this.email = email;

    this.password = password
}


// ==========================================
// 📘 Prototype Methods
// ==========================================

User.prototype.encryptPassword = function(){

    return `${this.password}abc`
}


User.prototype.changeUsername = function(){

    return `${this.username.toUpperCase()}`
}


// ==========================================
// 📘 Another Object
// ==========================================

const tea = new User(

    "tea",

    "tea@gmail.com",

    "123"
)


console.log(tea.encryptPassword());


// Output:
// 123abc


console.log(tea.changeUsername());


// Output:
// TEA


// ==========================================
// 📘 Important Concepts
// ==========================================

// class
// => syntactic sugar over prototype


// constructor()
// => initializes object values


// this
// => current object reference


// prototype
// => shared methods between objects


// new keyword
// => creates object instance


// Methods inside class
// are stored in prototype internally