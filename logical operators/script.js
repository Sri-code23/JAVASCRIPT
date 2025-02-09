// Logical Operators in JavaScript

// AND Operator (&&)
// Returns true if both conditions are true
console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR Operator (||)
// Returns true if at least one condition is true
console.log(true || true);  // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// NOT Operator (!)
// Returns the opposite of the condition
console.log(!true);  // false
console.log(!false); // true

// Example usage:
let age = 25;
let isAdult = age >= 18;
let isEmployed = true;

if (isAdult && isEmployed) {
  console.log("You are an adult and employed.");
} else {
  console.log("You are either not an adult or not employed.");
}