// ==========================================
// 📘 reduce() IN JAVASCRIPT
// ==========================================


// reduce() is used to reduce
// array into a single value


const myNums = [1, 2, 3]


// ==========================================
// 📘 Normal Function Syntax
// ==========================================

// const myTotal = myNums.reduce(function (acc, currval) {

//     console.log(`acc: ${acc} and currval: ${currval}`);

//     return acc + currval

// }, 0)


// acc     => accumulator
// currval => current value
// 0       => initial value of accumulator


// Iteration Flow:

// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3


// Final Output:
// 6


// ==========================================
// 📘 Arrow Function Syntax
// ==========================================

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal)


// Output:
// 6


// ==========================================
// 📘 Real Example : Shopping Cart
// ==========================================

const shoppingCart = [

    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "py course",
        price: 999
    },

    {
        itemName: "mobile dev course",
        price: 5999
    },

    {
        itemName: "data science course",
        price: 12999
    },
]


// Add all course prices

const priceToPay = shoppingCart.reduce(

    (acc, item) => acc + item.price,

    0
)


console.log(priceToPay)


// ==========================================
// 📘 Calculation
// ==========================================

// 2999 + 999 + 5999 + 12999


// Final Output:
// 22996