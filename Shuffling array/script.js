// shuffling array
// Fisher-Yates shuffle
// The Fisher-Yates shuffle is a fast algorithm for generating
// a random permutation of an array. It works by swapping elements
// from the array with a random element from the subarray that includes 
// the current element and the remaining elements.

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random()* (i+1));
        console.log(`i: ${i}, j: ${j}`);
    
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    return arr;
    }


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(shuffle(arr));

const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
console.log(shuffle(arr2));
