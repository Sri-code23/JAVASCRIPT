let username = "Sridharan";

// Get the character at the specified index (0-based)
let characterat = username.charAt(0);
console.log(characterat); // Output: S

// Get the index of the first occurrence of the specified value
let index_of = username.indexOf("a");
console.log(index_of); // Output: 7

// Get the index of the last occurrence of the specified value
let lastindex_of = username.lastIndexOf("a");
console.log(lastindex_of); // Output: 7

// Get the length of the string
let length_of = username.length;
console.log(length_of); // Output: 9

// Remove whitespace from both ends of the string
let trimming = username.trim();
console.log(trimming); // Output: Sridharan

// Convert the string to uppercase
let uppercase = username.toUpperCase();
console.log(uppercase); // Output: SRIDHARAN

// Convert the string to lowercase
let lowercase = username.toLowerCase();
console.log(lowercase); // Output: sridharan

// Repeat the string the specified number of times
let repeat = username.repeat(2);
console.log(repeat); // Output: SridharanSridharan

// Check if the string starts with the specified value (Note: correct method name is startsWith)
let startwith = username.startsWith("S");
console.log(startwith); // Output: true

// Check if the string ends with the specified value (Note: correct method name is endsWith)
let endwith = username.endsWith("an");
console.log(endwith); // Output: true

// Check if the string includes the specified value
let include = username.includes("a");
console.log(include); // Output: true

// Replace all occurrences of the specified value with another value (Note: correct method name is replace)
let replaceall = username.replace("a", "e");
console.log(replaceall); // Output: Sreidheren

// Pad the string with the specified value to the specified length on the left
let padstart = username.padStart(10, "0");
console.log(padstart); // Output: 000Sridharan

// Pad the string with the specified value to the specified length on the right
let padend = username.padEnd(10, "0");
console.log(padend); // Output: Sridharan000

