// ==========================================
// 📘 IIFE (Immediately Invoked Function Expression)
// ==========================================


// IIFE = Function that runs immediately
// after being defined

// Mainly used to:
// ✅ Avoid global scope pollution
// ✅ Execute code immediately


// ==========================================
// 📘 Named IIFE
// ==========================================

(function chai(){

    // named IIFE

    console.log(`DB CONNECTED`);

})();


// Output:
// DB CONNECTED


// Important:
// Semicolon ; is needed to stop
// first IIFE before starting another


// ==========================================
// 📘 Arrow Function IIFE
// ==========================================

( (name) => {

    console.log(`DB CONNECTED TWO ${name}`);

} )('hitesh')


// Output:
// DB CONNECTED TWO hitesh