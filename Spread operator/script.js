// The spread operator in JavaScript is denoted by three dots (...) and is used to expand an iterable (like an array or object) into individual elements.

// Example 1: Using the spread operator with arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

// Example 2: Using the spread operator with objects
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3, d: 4 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Example 3: Using the spread operator with function arguments
function sum(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// Example 4: Using the spread operator with the Math.max function
let numbers2 = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers2)); // Output: 5


// Rest parameter in JavaScript is denoted by three dots (...) and is used to capture a variable number of arguments
// in a function. It is used to pass a variable number of arguments to a function.


// Example 5: Using the rest parameter in JavaScript
function myFunction(...args) {
  console.log(args); // Output: [1, 2, 3, 4, 5]
}
myFunction(1, 2, 3, 4, 5);

// Example 6: Using the rest parameter with other parameters
function myFunction(a, b, ...args) {
  console.log(a); // Output: 1
  console.log(b); // Output: 2
  console.log(args); // Output: [3, 4, 5]
}
myFunction(1, 2, 3, 4, 5);

// Example 7: Using the rest parameter in an arrow function
const myFunction = (...args) => {
  console.log(args); // Output: [1, 2, 3, 4, 5]
}
myFunction(1, 2, 3, 4, 5);