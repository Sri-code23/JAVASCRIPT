// setTimeout function is used to call a function after a specified number of milliseconds.
// This function is used to make a function call after a specified time interval.

// Example 1: setTimeout function
// This example demonstrates the setTimeout function. The function is called after 2 seconds.

// setTimeout function
function greet() {
    console.log('Hello World!');
}

// call the function after 2 seconds
setTimeout(greet, 2000);

// Output
// Hello World!

// Example 2: setTimeout function with arguments


// setTimeout function
function greet(name) {
    console.log('Hello ' + name);
}

// call the function after 2 seconds
setTimeout(greet, 2000, 'John');

// Output
// Hello John


// clearTimeout function
// clearTimeout function is used to stop the execution of the function specified by setTimeout function.

// Example 3: clearTimeout function
// This example demonstrates the clearTimeout function. The function is called after 2 seconds, but it is stopped before execution.

// setTimeout function
function greet() {
    console.log('Hello World!');
}

// call the function after 2 seconds
let timerId = setTimeout(greet, 2000);

// stop the execution
clearTimeout(timerId);

// Output
// (No output)