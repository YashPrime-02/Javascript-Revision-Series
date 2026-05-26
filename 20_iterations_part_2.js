// ==========================================
// 📘 filter() IN JAVASCRIPT
// ==========================================


// filter() returns a new array
// based on condition


// ==========================================
// 📘 forEach does NOT return values
// ==========================================

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {

//     // console.log(item);

//     return item
// } )


// console.log(values);


// Output:
// undefined


// Important:
// forEach does not return array


// ==========================================
// 📘 filter() Example
// ==========================================

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums = myNums.filter( (num) => {

//     return num > 4
// } )


// Output:
// [5, 6, 7, 8, 9, 10]


// ==========================================
// 📘 Same Work using forEach
// ==========================================

// const newNums = []


// myNums.forEach( (num) => {

//     if (num > 4) {

//         newNums.push(num)
//     }
// } )


// console.log(newNums);


// Output:
// [5, 6, 7, 8, 9, 10]


// ==========================================
// 📘 Array of Objects
// ==========================================

const books = [

    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },

    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },

    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },

    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },

    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },

    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },

    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },

    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },

    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// ==========================================
// 📘 Filter by Genre
// ==========================================

let userBooks = books.filter( (bk) => bk.genre === 'History')


// Output:
// Returns all History books


// ==========================================
// 📘 Multiple Conditions
// ==========================================

userBooks = books.filter( (bk) => {

    return bk.publish >= 1995 && bk.genre === "History"
})


console.log(userBooks);


// Output:
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   }
// ]


// Important:
// filter() only keeps elements
// where condition becomes true



// ==========================================
// 📘 map() & Chaining
// ==========================================


// map() returns a new array
// after performing operation


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// ==========================================
// 📘 Simple map()
// ==========================================

// const newNums = myNumers.map( (num) => {

//     return num + 10
// })


// Output:
// [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// ==========================================
// 📘 Method Chaining
// ==========================================

// Multiple methods can be chained together

const newNums = myNumers

                // Multiply each value by 10
                .map((num) => num * 10 )

                // Add 1 to each value
                .map( (num) => num + 1)

                // Keep values greater than or equal to 40
                .filter( (num) => num >= 40)


console.log(newNums);


// ==========================================
// 📘 Step-by-Step Result
// ==========================================

// After first map:
// [10,20,30,40,50,60,70,80,90,100]

// After second map:
// [11,21,31,41,51,61,71,81,91,101]

// After filter:
// [41,51,61,71,81,91,101]


// Final Output:
// [41, 51, 61, 71, 81, 91, 101]