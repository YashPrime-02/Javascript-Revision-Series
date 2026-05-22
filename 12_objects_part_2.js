// ==========================================
// 📘 OBJECTS PART 2
// ==========================================


// ------------------------------------------
// ✅ Creating Objects
// ------------------------------------------

// const tinderUser = new Object() // singleton object

const tinderUser = {} // non-singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// ==========================================
// 📘 Nested Objects
// ==========================================

const regularUser = {
    email: "some@gmail.com",

    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}


// Access nested values

// console.log(regularUser.fullname.userfullname.firstname)


// ==========================================
// 📘 Merge Objects
// ==========================================

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// ------------------------------------------
// Different ways to merge
// ------------------------------------------

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


// ==========================================
// 📘 Array of Objects
// ==========================================

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },

    {
        id: 1,
        email: "h@gmail.com"
    },

    {
        id: 1,
        email: "h@gmail.com"
    },
]


// Access object inside array

users[1].email


// ==========================================
// 📘 Object Methods
// ==========================================

// console.log(Object.keys(tinderUser))

// Returns array of keys


// console.log(Object.values(tinderUser))

// Returns array of values


// console.log(Object.entries(tinderUser))

// Returns key-value pairs in array


// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// Checks property exists or not


// ==========================================
// 📘 Object Destructuring
// ==========================================

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


// course.courseInstructor


// Destructuring

const {courseInstructor: instructor} = course


// console.log(courseInstructor)

console.log(instructor)


// ==========================================
// 📘 JSON Structure
// ==========================================

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// JSON Array Format

[
    {},
    {},
    {}
]