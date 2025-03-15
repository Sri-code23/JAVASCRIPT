// closures 
// A closure is a function having access to the parent scope,
//  even after the parent function has closed.

// In JavaScript, closures are created every time a function is created,
//  at function creation time.

// To use a closure, simply define a function inside another function 
// and expose it.

// In JavaScript, a function can be created inside another function.
//  This is called a nested function.

// A function can be returned from another function in JavaScript.
//  This is called a closure.

function outerFunction() {
    let count = 1;
    function innerFunction() {
        count++;
        console.log(count);
    }

    function getcount() {
        return count;
    }
    return {innerFunction, getcount};
}
var innerFunc = outerFunction();
innerFunc.innerFunction(); // 2
innerFunc.innerFunction(); // 3
innerFunc.innerFunction(); // 3
innerFunc.innerFunction(); // 3

console.log(`current count: ${innerFunc.getcount()} `)