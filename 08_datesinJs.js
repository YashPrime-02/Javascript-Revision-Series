// ==========================================================
// CURRENT DATE & TIME
// ==========================================================

// creates current date and time
let myDate = new Date()

console.log(myDate)

/*
Date object stores:
- current date
- current time
- timezone information
*/


// ==========================================================
// DATE FORMATS
// ==========================================================

console.log(myDate.toString())

/*
Full readable format

Example:
Tue May 20 2026 12:30:45 GMT+0530
*/


console.log(myDate.toDateString())

/*
Only date part

Example:
Tue May 20 2026
*/


console.log(myDate.toLocaleString())

/*
Date + time in local region format

Example:
20/5/2026, 12:30:45 pm
*/


// checking datatype
console.log(typeof myDate) // object

/*
IMPORTANT:
Date in JavaScript is an object.
*/


// ==========================================================
// CREATING CUSTOM DATES
// ==========================================================


// year, month, day
let dateOne = new Date(2023, 0, 23)

console.log(dateOne.toDateString())

/*
Month indexing starts from 0

0 => January
1 => February
*/


// year, month, day, hour, minute
let dateTwo = new Date(2023, 0, 23, 5, 3)

console.log(dateTwo.toLocaleString())


// YYYY-MM-DD format
let dateThree = new Date("2023-01-14")

console.log(dateThree.toLocaleString())


// MM-DD-YYYY format
let myCreatedDate = new Date("01-14-2023")

console.log(myCreatedDate.toLocaleString())


// ==========================================================
// TIMESTAMP
// ==========================================================

let myTimeStamp = Date.now()

console.log(myTimeStamp)

/*

Date.now()

returns current timestamp in milliseconds
from January 1, 1970 (Unix Epoch)

*/


// ==========================================================
// GETTING DATE TIMESTAMP
// ==========================================================

console.log(myCreatedDate.getTime())

/*
Returns timestamp of specific date.
*/


// ==========================================================
// CONVERT MILLISECONDS TO SECONDS
// ==========================================================

console.log(Math.floor(Date.now() / 1000))

/*
1000 milliseconds = 1 second

Math.floor removes decimal value.
*/


// ==========================================================
// DATE GET METHODS
// ==========================================================

let newDate = new Date()

console.log(newDate)


// ==========================================================
// getMonth()
// ==========================================================

console.log(newDate.getMonth() + 1)

/*
Months start from 0.

+1 makes it human-readable.

0 => January
11 => December
*/


// ==========================================================
// getDay()
// ==========================================================

console.log(newDate.getDay())

/*
Returns weekday number:

0 => Sunday
1 => Monday
2 => Tuesday

...
*/


// ==========================================================
// TEMPLATE LITERAL WITH DATE
// ==========================================================

// `${newDate.getDay()} and the time`

/*
Useful for:
- dashboards
- clocks
- notifications
- dynamic UI
*/


// ==========================================================
// CUSTOM DATE FORMATTING
// ==========================================================

newDate.toLocaleString('default', {
    weekday: "long",
})

/*

weekday: "long"

Outputs:
Monday
Tuesday
Wednesday

Used for custom formatting.

*/


// ==========================================================
// MORE USEFUL FORMAT OPTIONS
// ==========================================================

console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    })
)

/*

Possible Output:

Tuesday, May 20, 2026

*/


// ==========================================================
// REAL WORLD USE CASES
// ==========================================================

/*

Date.now()
=> OTP expiry
=> Session timeout
=> Performance tracking

toLocaleString()
=> User-friendly UI date display

getMonth()
=> Calendars

getDay()
=> Scheduling systems

timestamps
=> Databases
=> APIs
=> Authentication systems

*/


// ==========================================================
// INTERVIEW NOTES
// ==========================================================

/*

1. Date is an object in JavaScript.

2. Months start from 0.

3. Date.now()
   returns milliseconds.

4. Unix Epoch starts from:
   January 1, 1970

5. getDay()
   returns weekday index.

6. getMonth()
   returns month index.

7. toLocaleString()
   formats according to region.

*/


// ==========================================================
// QUICK REVISION SUMMARY
// ==========================================================

/*

new Date()
=> current date & time

Date.now()
=> current timestamp

getMonth()
=> current month

getDay()
=> weekday number

getTime()
=> timestamp of date

toLocaleString()
=> formatted local date/time

Math.floor(Date.now()/1000)
=> current seconds timestamp

*/



// ==========================================================
// TEMPORAL API (MODERN DATE API)
// ==========================================================

/*

Temporal is the modern replacement for JavaScript Date.

It was introduced because Date has many issues like:
- confusing APIs
- timezone problems
- mutable behavior
- month indexing confusion
- parsing inconsistencies

*/


// ==========================================================
// EXAMPLE
// ==========================================================

// const today = Temporal.Now.plainDateISO()

// console.log(today)

/*

Possible Output:

2026-05-22

*/


// ==========================================================
// WHY TEMPORAL IS BETTER
// ==========================================================

/*

Temporal provides:
- immutable dates
- safer timezone handling
- cleaner APIs
- predictable parsing
- better date calculations

*/


// ==========================================================
// OLD DATE PROBLEM
// ==========================================================

/*

Old Date API:

new Date().getMonth()

returns:
0 for January

which is confusing.

*/


// ==========================================================
// IMPORTANT NOTE
// ==========================================================

/*

Temporal is NOT fully supported
in all browsers yet.

Especially:
- older browsers
- some Safari versions

may not support it completely.

Because of this,
developers still commonly use:
- Date object
- libraries
- Temporal polyfills

for production apps.

*/


// ==========================================================
// POLYFILL EXAMPLE
// ==========================================================

/*

npm install @js-temporal/polyfill

*/


// ==========================================================
// QUICK SUMMARY
// ==========================================================

/*

Date
=> old traditional API

Temporal
=> modern improved API

Temporal is future-focused,
but Date is still important
for interviews and real projects.

*/