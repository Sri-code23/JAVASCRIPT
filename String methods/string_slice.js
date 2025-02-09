// String Slicing in JavaScript
// ===========================

// The slice() method extracts a section of a string and returns it as a new string.
// It takes two parameters: the start index and the end index.

// Example 1: Basic Slicing
let str = "Hello, World!";
let slicedStr = str.slice(7, 12);
console.log(slicedStr); // Output: "World"

// Example 2: Omitting the End Index
let str2 = "Hello, World!";
let slicedStr2 = str2.slice(7);
console.log(slicedStr2); // Output: "World!"

// Example 3: Negative Index
let str3 = "Hello, World!";
let slicedStr3 = str3.slice(-6);
console.log(slicedStr3); // Output: "World!"

// Example 4: Slice with Negative Start and End Index
let str4 = "Hello, World!";
let slicedStr4 = str4.slice(-6, -1);
console.log(slicedStr4); // Output: "Worl"

// Example 5: Slice with Start Index Greater than End Index
let str5 = "Hello, World!";
let slicedStr5 = str5.slice(12, 7);
console.log(slicedStr5); // Output: ""

// Example 6: Slice with Start Index Equal to End Index
let str6 = "Hello, World!";
let slicedStr6 = str6.slice(7, 7);
console.log(slicedStr6); // Output: ""