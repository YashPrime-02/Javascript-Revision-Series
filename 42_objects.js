// ==========================================

// 📘 OBJECTS & CONSTRUCTOR FUNCTIONS

// ==========================================

const user = {
  username: "Yash Mishra",

  loginCount: 8,

  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");

    // Access current object using this

    // console.log(`Username: ${this.username}`);

    // this => current object

    console.log(this);
  },
};

// console.log(user.username)

// console.log(user.getUserDetails());

// In browser:

// this => window object

// console.log(this);

// ==========================================

// 📘 Constructor Function

// ==========================================

function User(username, loginCount, isLoggedIn) {
  // this refers to new object

  this.username = username;

  this.loginCount = loginCount;

  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  // return this is implicit

  return this;
}

// ==========================================

// 📘 new Keyword

// ==========================================

const userOne = new User("hitesh", 12, true);

const userTwo = new User("ChaiAurCode", 11, false);

// constructor property points

// back to constructor function

console.log(userOne.constructor);

// console.log(userTwo);

// Without new keyword,

// values can overwrite each other

// ==========================================

// 📘 Functions are Objects

// ==========================================

function multipleBy5(num) {
  return num * 5;
}

// Add custom property to function

multipleBy5.power = 2;

console.log(multipleBy5(5));

// Output:

// 25

console.log(multipleBy5.power);

// Output:

// 2

console.log(multipleBy5.prototype);

// prototype exists automatically

// in functions

// ==========================================

// 📘 Prototype Example

// ==========================================

function createUser(username, score) {
  this.username = username;

  this.score = score;
}

// Add method in prototype

createUser.prototype.increment = function () {
  this.score++;
};

// Another prototype method

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

// ==========================================

// 📘 Object Creation

// ==========================================

const chai = new createUser("chai", 25);

const tea = new createUser("tea", 250);

// Important:

// Use new keyword

chai.printMe();

// Output:

// price is 25

// ==========================================

// 📘 Behind the Scenes of new Keyword

// ==========================================

/*



1️⃣ A new empty object is created



2️⃣ Prototype gets linked



3️⃣ Constructor function executes



4️⃣ this binds to new object



5️⃣ Object gets returned automatically



*/

// ==========================================

// 📘 Flow Example

// ==========================================

/*



const chai = new createUser("chai", 25)



↓



New object created



↓



this.username = "chai"



this.score = 25



↓



Prototype methods linked



↓



Object returned



*/

/*



Here's what happens behind the scenes when the new keyword is used:



A new object is created: The new keyword initiates the creation of a new JavaScript object.



A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.



The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.



The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.



*/
