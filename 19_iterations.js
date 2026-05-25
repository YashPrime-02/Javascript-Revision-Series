// ==========================================
// 📘 FOR LOOP IN JAVASCRIPT
// ==========================================


// Syntax:
// for(initialization; condition; increment)


// ==========================================
// 📘 Basic for Loop
// ==========================================

for (let i = 0; i <= 10; i++) {

    const element = i

    if (element == 5) {

        // console.log("5 is best number");
    }

    // console.log(element);
}


// Output:
// 0 to 10 printed


// Important:
// let variables are block scoped

// console.log(element);

// Output:
// ReferenceError


// ==========================================
// 📘 Nested Loop
// ==========================================

for (let i = 1; i <= 10; i++) {

    // console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {

        // console.log(`Inner loop value ${j} and inner loop ${i}`);

        // Multiplication table

        // console.log(i + '*' + j + ' = ' + i*j );
    }
}


// Example Output:
// 2 * 3 = 6
// 5 * 4 = 20


// ==========================================
// 📘 Loop on Array
// ==========================================

let myArray2 = ["flash", "batman", "superman"]


// console.log(myArray2.length);

// Output:
// 3


for (let index = 0; index < myArray2.length; index++) {

    const element = myArray2[index]

    // console.log(element);
}


// Output:
// flash
// batman
// superman


// ==========================================
// 📘 break Statement
// ==========================================

// break stops the loop completely


// for (let index = 1; index <= 20; index++) {

//     if (index == 5) {

//         console.log(`Detected 5`);

//         break
//     }

//     console.log(`Value of i is ${index}`);
// }


// Output:
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5


// ==========================================
// 📘 continue Statement
// ==========================================

// continue skips current iteration


for (let index = 1; index <= 20; index++) {

    if (index == 5) {

        console.log(`Detected 5`);

        continue
    }

    console.log(`Value of i is ${index}`);
}


// Output:
// Prints all values except 5



// ==========================================
// 📘 WHILE & DO WHILE LOOP
// ==========================================


// ==========================================
// 📘 while Loop
// ==========================================

let index = 0

// while (index <= 10) {

//     console.log(`Value of index is ${index}`);

//     index = index + 2
// }


// Output:
// 0
// 2
// 4
// 6
// 8
// 10


// Important:
// Increment/decrement is necessary
// otherwise loop becomes infinite


// ==========================================
// 📘 while Loop with Array
// ==========================================

let myArray3 = ['flash', "batman", "superman"]

let arr = 0


while (arr < myArray3.length) {

    // console.log(`Value is ${myArray3[arr]}`);

    arr = arr + 1
}


// Output:
// Value is flash
// Value is batman
// Value is superman


// ==========================================
// 📘 do while Loop
// ==========================================

// do while runs at least one time
// even if condition is false


let score = 11


do {

    console.log(`Score is ${score}`);

    score++

} while (score <= 10);


// Output:
// Score is 11


// Reason:
// Condition checked after execution