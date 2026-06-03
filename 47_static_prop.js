// ==========================================
// 📘 STATIC PROPERTIES & METHODS
// ==========================================


// static methods belong to class itself
// not to object instances


// ==========================================
// 📘 Parent Class
// ==========================================

class User {

    constructor(username){

        this.username = username
    }


    // Normal method

    logMe(){

        console.log(
            `Username: ${this.username}`
        );
    }


    // Static method

    static createId(){

        return `123`
    }
}


// ==========================================
// 📘 Object Creation
// ==========================================

const hitesh = new User("hitesh")


// console.log(hitesh.createId())


// ❌ Error

// Because static methods cannot
// be accessed using object instance


// ==========================================
// 📘 Child Class
// ==========================================

class Teacher extends User {

    constructor(username, email){

        // Call parent constructor

        super(username)

        this.email = email
    }
}


// ==========================================
// 📘 Child Object
// ==========================================

const iphone = new Teacher(

    "iphone",

    "i@phone.com"
)


// ==========================================
// 📘 Static Method Access
// ==========================================

console.log(iphone.createId())


// ❌ Error:
// iphone.createId is not a function


// Because static methods belong
// to class itself, not objects


// ==========================================
// 📘 Correct Way
// ==========================================

// Access using class name

console.log(User.createId())


// Output:
// 123


// ==========================================
// 📘 Important Concepts
// ==========================================

// static
// => method/property belongs to class


// Instance Object
// => created using new keyword


// Static methods are NOT inherited
// by object instances


// Can be accessed only using:

// ClassName.methodName()


// Example:

// User.createId()