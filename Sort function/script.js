// sort ()

// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// Syntax
// arr.sort([compareFunction])

// Parameters
// compareFunction (Optional)
// Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

// Return value
// The sorted array.

const months = ['naruto', 'sasuke', 'sakura', 'kakashi', 'hinata'];
months.sort();
console.log(months); // ['hinata', 'kakashi', 'naruto', 'sakura', 'sasuke']

const arra = [1, 30, 4, 21, 100000];
arra.sort((a,b)=> a - b);
console.log(arra); // [1, 100000, 21, 30, 4]

const symb = ['!', '@', '#', '$', '%'];
symb.sort();
console.log(symb); // ['!', '#', '$', '%', '@']



// localeCompare
// The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.

const months2 = ['naruto', 'sasuke', 'sakura', 'kakashi', 'hinata'];
months2.sort((a,b)=> a.localeCompare(b));
console.log(months2); // ['hinata', 'kakashi', 'naruto', 'sakura', 'sasuke']