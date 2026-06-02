// ==========================================
// 📘 PROMISES IN JAVASCRIPT
// ==========================================


// Promise represents eventual completion
// or failure of async operation


// ==========================================
// 📘 Promise Creation
// ==========================================

const promiseOne = new Promise(function(resolve, reject){

    // Async task examples:
    // DB calls
    // API calls
    // File handling

    setTimeout(function(){

        console.log('Async task is complete');

        // Promise resolved

        resolve()

    }, 1000)
})


// ==========================================
// 📘 Promise Consumption
// ==========================================

promiseOne.then(function(){

    console.log("Promise consumed");
})


// then() runs when promise resolves


// ==========================================
// 📘 Direct Promise
// ==========================================

new Promise(function(resolve, reject){

    setTimeout(function(){

        console.log("Async task 2");

        resolve()

    }, 1000)

})

.then(function(){

    console.log("Async 2 resolved");
})


// ==========================================
// 📘 Passing Data in resolve()
// ==========================================

const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){

        resolve({

            username: "Chai",
            email: "chai@example.com"
        })

    }, 1000)
})


// Data received in then()

promiseThree.then(function(user){

    console.log(user);
})


// Output:
// {username: "Chai", email: "chai@example.com"}


// ==========================================
// 📘 Promise Chaining
// ==========================================

const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){

        let error = true

        if (!error) {

            resolve({

                username: "hitesh",
                password: "123"
            })

        } else {

            reject('ERROR: Something went wrong')
        }

    }, 1000)
})



promiseFour

.then((user) => {

    console.log(user);

    // Pass value to next then()

    return user.username
})

.then((username) => {

    console.log(username);
})

.catch(function(error){

    // Handles rejection

    console.log(error);

})

.finally(() =>

    // Runs always

    console.log(
        "The promise is either resolved or rejected"
    )
)


// finally() always executes


// ==========================================
// 📘 async / await
// ==========================================

const promiseFive = new Promise(function(resolve, reject){

    setTimeout(function(){

        let error = true

        if (!error) {

            resolve({

                username: "javascript",
                password: "123"
            })

        } else {

            reject('ERROR: JS went wrong')
        }

    }, 1000)

})


// async function always returns promise

async function consumePromiseFive(){

    try {

        // Wait until promise resolves

        const response = await promiseFive

        console.log(response);

    }

    catch (error) {

        // Handles error

        console.log(error);
    }
}

consumePromiseFive()


// ==========================================
// 📘 Fetch API with async/await
// ==========================================

// async function getAllUsers(){

//     try {

//         const response = await fetch(
//             'https://jsonplaceholder.typicode.com/users'
//         )


//         // Convert response to JSON

//         const data = await response.json()

//         console.log(data);

//     }

//     catch (error) {

//         console.log("E: ", error);
//     }
// }


// getAllUsers()


// ==========================================
// 📘 Fetch API with then()
// ==========================================

fetch('https://api.github.com/users/hiteshchoudhary')

.then((response) => {

    // Convert to JSON

    return response.json()
})

.then((data) => {

    console.log(data);
})

.catch((error) =>

    console.log(error)
)


// ==========================================
// 📘 Important Methods
// ==========================================

// resolve()
// => Promise successful

// reject()
// => Promise failed

// then()
// => Handles success

// catch()
// => Handles error

// finally()
// => Always runs

// await
// => Waits for promise result