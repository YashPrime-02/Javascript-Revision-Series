// ==========================================
// 📘 GETTERS & SETTERS
// ==========================================


// Getters and Setters allow us
// to control how properties are
// accessed and modified


class User {

    constructor(email, password){

        // Calls setter methods

        this.email = email

        this.password = password
    }


    // ==========================================
    // 📘 Email Getter
    // ==========================================

    get email(){

        return this._email.toUpperCase()
    }


    // ==========================================
    // 📘 Email Setter
    // ==========================================

    set email(value){

        this._email = value
    }


    // ==========================================
    // 📘 Password Getter
    // ==========================================

    get password(){

        return `${this._password}hitesh`
    }


    // ==========================================
    // 📘 Password Setter
    // ==========================================

    set password(value){

        this._password = value
    }
}


// ==========================================
// 📘 Object Creation
// ==========================================

const hitesh = new User(

    "h@hitesh.ai",

    "abc"
)


// ==========================================
// 📘 Access Getter
// ==========================================

console.log(hitesh.email)


// Output:
// H@HITESH.AI


// ==========================================
// 📘 Password Getter
// ==========================================

// console.log(hitesh.password)


// Output:
// abchitesh


// ==========================================
// 📘 Why _email & _password ?
// ==========================================

// If we write:

// set email(value){
//     this.email = value
// }


// Then setter calls itself again
// and again causing:

// ❌ Maximum call stack size exceeded


// To avoid this, we use:

// this._email

// this._password


// ==========================================
// 📘 Flow
// ==========================================

/*

new User("h@hitesh.ai", "abc")

↓

constructor()

↓

this.email = email

↓

email setter runs

↓

this._email = value

↓

console.log(hitesh.email)

↓

email getter runs

↓

returns uppercase value

*/


// ==========================================
// 📘 Important Concepts
// ==========================================

// get
// => runs when property is accessed


// set
// => runs when property is assigned


// _email
// => internal storage property


// Getters & Setters help
// add validation or custom logic
// while reading/writing values