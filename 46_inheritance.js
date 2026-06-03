// ==========================================
// 📘 INHERITANCE IN JAVASCRIPT
// ==========================================


// Inheritance allows one class
// to access properties and methods
// of another class


// ==========================================
// 📘 Parent Class
// ==========================================

class User {

    constructor(username){

        this.username = username
    }


    // Parent class method

    logMe(){

        console.log(
            `USERNAME is ${this.username}`
        );
    }
}


// ==========================================
// 📘 Child Class
// ==========================================

// Teacher inherits User

class Teacher extends User{


    constructor(username, email, password){

        // Call parent constructor

        super(username)

        this.email = email

        this.password = password
    }


    // Child class method

    addCourse(){

        console.log(
            `A new course was added by ${this.username}`
        );
    }
}


// ==========================================
// 📘 Object Creation
// ==========================================

const chai = new Teacher(

    "chai",

    "chai@teacher.com",

    "123"
)


// Teacher can access
// inherited methods

chai.logMe()


// Output:
// USERNAME is chai


// ==========================================
// 📘 Parent Class Object
// ==========================================

const masalaChai = new User("masalaChai")


masalaChai.logMe()


// Output:
// USERNAME is masalaChai


// ==========================================
// 📘 instanceof
// ==========================================

// Checks object belongs
// to specific class

console.log(chai instanceof User);


// Output:
// true


// Because Teacher inherits User


// ==========================================
// 📘 Important Concepts
// ==========================================

// extends
// => used for inheritance


// super()
// => calls parent constructor


// Child class gets:
// ✅ Parent properties
// ✅ Parent methods


// instanceof
// => checks inheritance relationship


// Teacher → User
// means Teacher has access
// to User methods