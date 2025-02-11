// Array in JavaScript
// An array is a collection of elements of the same data type stored in contiguous memory locations.

// Creating an Array
let colors = ['red', 'green', 'blue'];

// Accessing Array Elements
console.log(colors[0]); // Output: red

// Array Operations
// 1. Push: Adds one or more elements to the end of an array.
colors.push('yellow');
console.log(colors); // Output: ['red', 'green', 'blue', 'yellow']

// 2. Pop: Removes the last element from an array.
colors.pop();
console.log(colors); // Output: ['red', 'green', 'blue']

// 3. Shift: Removes the first element from an array.
colors.shift();
console.log(colors); // Output: ['green', 'blue']

// 4. Unshift: Adds one or more elements to the beginning of an array.
colors.unshift('orange');
console.log(colors); // Output: ['orange', 'green', 'blue']

// Array Functions
// 1. Concat: Joins two or more arrays into a single array.
let numbers = [1, 2, 3];
let combined = colors.concat(numbers);
console.log(combined); // Output: ['orange', 'green', 'blue', 1, 2, 3]

// 2. Includes: Checks if an array includes a specified element.
console.log(colors.includes('green')); // Output: true

// 3. IndexOf: Returns the index of the first occurrence of a specified element.
console.log(colors.indexOf('blue')); // Output: 2

// 4. Join: Joins all elements of an array into a string.
console.log(colors.join(', ')); // Output: orange, green, blue

// 5. Slice: Returns a shallow copy of a portion of an array.
let sliced = colors.slice(1, 2);
console.log(sliced); // Output: ['green']

// 6. Splice: Adds or removes elements from an array.
colors.splice(1, 0, 'purple');
console.log(colors); // Output: ['orange', 'purple', 'green', 'blue']

// 7. Sort: Sorts the elements of an array in place.
let sorted = colors.sort();
console.log(sorted); // Output: ['blue', 'green', 'orange', 'purple']

// 8. Reverse: Reverses the order of the elements of an array.
let reversed = colors.reverse();
console.log(reversed); // Output: ['purple', 'orange', 'green', 'blue']

// 9. Map: Creates a new array with the results of applying a provided function on every element in this array.
let mapped = colors.map(color => color.toUpperCase());
console.log(mapped); // Output: ['PURPLE', 'ORANGE', 'GREEN', 'BLUE']

// 10. Filter: Creates a new array with all elements that pass the test implemented by the provided function.
let filtered = colors.filter(color => color.length > 5);
console.log(filtered); // Output: ['orange', 'purple']

// 11. Reduce: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let reduced = colors.reduce((acc, color) => acc + color.length, 0);
console.log(reduced); // Output: 20








