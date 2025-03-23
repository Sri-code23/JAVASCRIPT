# JavaScript

___



## To print on console 

```
console.log(" hello world ")
console.log(' hello world ')
console.log(` hello world `)
```

## To print on window popup

```
window.alert("hello")
```


# Variables 
variables are used to store data that can be used later
in the program

## variable declaration
 1. var
 2. let
 3. const

## var
 var is used to declare a variable, but it has some issues
 1. var can be redeclared
 2. var can be reassign
 3. var has a function scope
 4. var is hoisted

```javascript
var name = "John";
console.log(name);
var name = "Doe";
console.log(name);
```

## let 
 let is used to declare a variable, it has some issues
 1. let can not be redeclared
 2. let can be reassigned
 3. let has a block scope
 4. let is not hoisted

```javascript
let age = 30;
console.log(age);
age = 40;
console.log(age);
```


## const
 const is used to declare a variable, it has some issues
 1. const can not be redeclared
 2. const can not be reassigned
 3. const has a block scope
 4. const is not hoisted


```js
const country = "Bangladesh";
console.log(country);
country = "India";
console.log(country);
country = "Pakistan";
console.log(country);
const country = "Nepal";
console.log(country);
```

# Data types

1. int
2. float
3. string
4. boolean
5. array
6. object
7. null
8. undefined
9. NaN


```js 
// 1. int
var age = 30;
console.log(age);
// 2. float
var height = 5.7;
console.log(height);
// 3. string
var name = "John";
console.log(name);
// 4. boolean
var isAdmin = true;
console.log(isAdmin);
// 5. array
var names = ["John", "Doe", "Smith"];
console.log(names);
// 6. object
var user = {
    name: "John",
    age: 30
    };
    console.log(user);

// 7. null
var car = null;
console.log(car);
// 8. undefined
var test;
console.log(test);
// 9. NaN
var result = 10 * "a";
console.log(result);    
// 10. Infinity
var result = 1 / 0;
console.log(result);
// 11. -Infinity
var result = -1 / 0;
console.log(result);
```


# Arithmetic Operators
Arithmetic operators are used to perform mathematical operations on numbers. Here are the basic arithmetic operators in JavaScript
1. Addition: `a + b`
2. Subtraction: `a - b`
3. Multiplication: `a * b`
4. Division: `a / b`
5. Modulus: `a % b`
6. Exponentiation: `a ** b`
7. Increment: `a++` or `++a`
8. Decrement: `a--` or `--a`
Here is an example of how to use these operators in JavaScript

```js
let a = 20;

// addition
a = a + 1;
console.log(a);
// Output: 21

// subtraction
a = a - 3;
console.log(a);
// Output: 18

// multiplication
a = a * 2;
console.log(a);
// Output: 36

//division 
a = a / 2;
console.log(a);
// Output: 18

//Modulus 
a = a % 4;
console.log(a);
// Output: 2

// Increment
a++;
console.log(a);
// Output: 3

// Decrement
a--;
console.log(a);
// Output: 2

// Exponentiation
a = a ** 2;
console.log(a);
// Output: 4
```


# Getting user input
## Easy way to get user input in JavaScript
To get user input in JavaScript, you can use the `prompt()` function. Here is an example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User input</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 id="heading">hello </h1>
        <!-- see script.js for filler -->
    <script src="script.js"></script>
</body>
</html>
```

```js
/* user input (easy way using javascript) */
// getting user input using prompt and displaying it on the webpage using innerHTML property of document object model (DOM)
// prompt() method is used to display a dialog box with an optional message prompting the user to input some text. It returns a string containing the text entered by the user, or null.

// declaring a variable username
var username;

// getting user input using prompt and storing it in the variable username
username= window.prompt("Enter your name");

// displaying the value of username on the webpage using innerHTML property of document object model (DOM)
document.getElementById("heading").innerHTML =
`
<div class="container">
<h2>Welcome, ${username} </h2> 
</div>
`;

```

## Professional way to get user input in JavaScript
in this we use html input tag to receive input and pass it to the js 
example code:

### Html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional way</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
      <h2 id="welcome">How can i call you ? </h2>
      <!-- <label for="name">USER NAME : </label> -->
      <input id="name" placeholder="Enter your name"  maxlength="10" required >
      <button id="submit-button"> Enter</button>
    </div>
    <script src="script.js"></script>
</body>
</html>

```

### css
```css
body{
    background-color: #000000;
    color: #ffffff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

h2{
    color: #ffffff;
    text-align: center;
    font-size: 25px;
    margin-top: 25px;
    font-weight: bold;
}

.container{
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:300px;
    height:250px;
    background-color:#0f333b;
    border-radius: 15px;
    box-shadow: 0 0 10px #000000;
    /* just to center the elements inside ithe container */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container input{
    width: 240px;
    height: 30px;
    margin: 10px 20px;
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    background-color: #000000;
    color: beige;
}

.container input:focus{
    outline: none;
    border: 1px solid #636363;
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
}

.container input::placeholder{
    color: #7c7c7c;
    font-weight: bold;
}

/* .container input::selection{
    background-color: #ffe922;
    color: #978800;
}

.container input:active{
    background-color: #000000;
    color: #ffffff;
} */

.container button{
    width: 250px;
    height: 36px;
    margin: 30px 10px;
    border-radius: 5px;
    border: none;
    background-color: #ffffff;
    color: #000000;
    font-size: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
}
.container button:hover{
    background-color: rgb(0, 0, 0);
    /* font-size: 14px; */
    font-weight: bold;
    color: #ffffff;
}

@media screen and (max-width: 600px){
    .container{
        width: 250px;
        height: 200px;
    }

    .container input{
        width: 200px;
        height: 40px;
        margin: 5px 10px;
    }

    .container button{
        width: 200px;
        height: 36px;
        margin: 20px 10px;
    }
    
}
```

### javaScript
```js
document.getElementById("submit-button").onclick =function () { // function to get the value of the input field and display it in the welcome message
    var username = document.getElementById("name").value; 
    // get the value of the input field
    document.getElementById("welcome").textContent =  `Hello, ${username} ! `; 
    // display the value in the welcome message
    document.getElementById("name").value = "";
    // clear the input field after displaying the welcome message





    // document.getElementById("welcome").innerHTML = `<h2>Welcome ${username}</h2>` 
    // display the value in the welcome message
}
```


# Constants
in js, constants are declared using the `const` keyword. They cannot be reassigned once declared.

```js
// const - constants in js 
// const is used to declare a constant variable

const pi =3.14 ;

```

# counter program (project)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h3 class="heading">Counter Program</h3>
        <div class="sub_container">
            <div class="count_container">
                <button id="decrease" class="button1"><strong> ー </strong></button>
                    <div id="count_div">
                        <strong><h2 id="count">0</h2></strong>
                    </div>
                <button id="increase" class="button2"><strong> + </strong></button>
            </div>
            <div class="reset">
                <button id="reset" class="reset_button"><strong> reset  </strong></button>
            </div>
        </div>
    </div>
<script src="script.js"></script>
</body>
</html>
```

```css
/* styles.css */
body{
    background-color: rgb(0, 0, 0);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.container{
    display: flex;
    align-items:center;
    justify-content: center;
    border: 1px solid rgb(53, 53, 53);
    flex-direction: column;
    font-size: 30px;
    font-weight: 700;
    color: white;
    border-radius: 15px;
    padding: 30px 30px;
    overflow: hidden;
    margin: 10px 10px;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width:50%;
    height:300px;
}

.heading{
    padding: 1px 90px 10px 90px;
    color: aquamarine;
    border-bottom: 1px solid grey;

}

.sub_container{
    background-color: rgb(0, 0, 0);
    border: 2px solid rgb(0, 0, 0);
    width: 90%;
    height: 70%;
    padding: 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 10px;
}


.count_container{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(0, 0, 0);
    flex-direction: row;
    font-size: 30px;
    font-weight: 700;
    color: rgb(187, 187, 187);
    border-radius: 15px;
    padding: 20px 10px;
    width: 90%;
    gap: 20px;
}


.button1{
    padding: 0px 10px;
    width: 20%;
    height: 90px;
    font-size: 50px;
    border-radius:10px;
    background-color: rgb(0, 0, 0);
    border: 2px solid rgb(80, 80, 80);
    font-weight: 2000;
    color: white;
    overflow: hidden;
}

.button1:hover{
    transform: translateY(0.1px);
    border:2px solid rgb(150, 150, 150);
}
.button1:active{
    border: 2px solid rgb(150, 0, 0);
}

.button2{
    padding: 0px 10px;
    width: 20%;
    height: 90px;
    font-size: 80px;
    border-radius:10px;
    background-color: rgb(0, 0, 0);
    border: 2px solid rgb(80, 80, 80);
    font-weight: 2000;
    color: white;
    overflow: hidden;

}

.button2:hover{
    transform: translateY(0.1px);
    border: 2px solid rgb(150, 150, 150);
}
.button2:active{
    border: 2px solid rgb(0, 151, 45);
}

.reset{
    width:60%;
    height:50px;
    /* background-color: aqua; */
    border-radius: 10px;
}

.reset_button{
    padding: 0px 10px;
    width: 100%;
    height: 100%;
    font-size: 30px;
    border-radius:10px;
    background-color: rgb(0, 0, 0);
    border: 2px solid rgb(80, 80, 80);
    font-weight: 2000;
    color: white;
    overflow: hidden;

}

.reset_button:hover{
    transform: translateY(0.1px);
    border: 2px solid rgb(148, 148, 148);
}
.reset_button:active{
    border: 2px solid rgb(184, 184, 184);
}
#count_div{
    min-width:40%;
    width: auto;
    height: 100px;
    display: flex;
    align-items:center;
    justify-content: center;
    border: 1px solid grey;
    border-radius:10px;
    padding: 10px 10px
}

h2{
    font-weight: 1000;
    font-size: 80px;
}

@media screen and (max-width:480px){
    .container{
        font-size: 20px;
        padding: 20px 30px;
        margin: 1px 1px;
        width: 70%;
        height:300px;
    }
    
    .sub_container{
        width: 100%;
        height: 70%;
        padding: 0px 0px;
    }
    
    .heading{
        padding: 1px 25px 20px 25px;
    }
    
    .count_container{
        font-size: 20px;
        padding: 10px 1px;
        width: 100%;
        gap: 10px;
    }
    
    .button1{
        padding: 0px 1px;
        width: 20%;
        height: 20%;
        font-size: 35px;
    }
    
    .button2{
        padding: 6px 1px;
        width: 20%;
        height: 20%;
        font-size: 35px;
    }
    
    .reset{
        width:90%;
        height:40px;
    }
    
    .reset_button{
        font-size: 20px;
    }
    
    #count_div{
        min-width:40%;
        width: auto;
        height: 80px;
        padding: 4px 4px
    }
    
    h2{
        font-size: 60px;
    }
    
}



```


```js

let count = 0;

document.getElementById("increase").onclick = function(){
    count = count +1;
    document.getElementById("count").textContent = count ;
}

document.getElementById("decrease").onclick = function(){
    count = count -1;
    document.getElementById("count").textContent = count ;
}


document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("count").textContent = count ;
}

```


# math object
The math object is a built-in object in JavaScript that provides functions for mathematical operations. It is not a DOM element, so it cannot be styled with CSS. However, you can use the math object to perform mathematical operations in your JavaScript code.
## Examples
Here are a few examples of how you can use the math object in your JavaScript code:
```javascript
// Calculate the square root of a number
let result = Math.sqrt(16);
console.log(result); // Output: 4

// Calculate the absolute value of a number
let result = Math.abs(-5);
console.log(result); // Output: 5

// Calculate the maximum of two numbers
let result = Math.max(10, 20);
console.log(result); // Output: 20

// Calculate the minimum of two numbers
let result = Math.min(10, 20);
console.log(result); // Output: 10

// Calculate the power of a number
let result = Math.pow(2, 3);
console.log(result); // Output: 8

// Calculate the random number between 0 and 1
let result = Math.random();
console.log(result); // Output: a random number between 0 and 1

// Calculate the round of a number
let result = Math.round(3.7);
console.log(result); // Output: 4

// Calculate the floor of a number
let result = Math.floor(3.7);
console.log(result); // Output: 3

// Calculate the ceil of a number
let result = Math.ceil(3.7);
console.log(result); // Output: 4

// Calculate the sin of a number
let result = Math.sin(3.14);
console.log(result); // Output: a value between -1 and 1

// Calculate the cos of a number
let result = Math.cos(3.14);
console.log(result); // Output: a value between -1 and 1

// Calculate the tan of a number
let result = Math.tan(3.14);
console.log(result); // Output: a value between -1 and 1

// Calculate the asin of a number
let result = Math.asin(0.5);
console.log(result); // Output: a value between -1 and 1

// Calculate the acos of a number
let result = Math.acos(0.5);
console.log(result); // Output: a value between 0 and 1

// Calculate the atan of a number
let result = Math.atan(0.5);
console.log(result); // Output: a value between -1 and 1

// random number between 1 and 100
let result = Math.floor(Math.random() * 100) + 1;
console.log(result); // Output: a random number between 1 and 100

```


# Type Conversion
In JavaScript, you can convert a number to a string using the `toString()` method or the
`String()` function. You can also convert a string to a number using the `parseInt()` or
`parseFloat()` functions.
```javascript
// Convert a number to a string
let number = 123;
let string = number.toString();
console.log(string); // Output: "123"
console.log(typeof string); // Output: "string"
console.log(typeof number); // Output: "number"

console.log(String(number)); // Output: "123"
console.log(typeof String(number)); // Output: "string"

```
in javasript you can convert a string to a number using the `parseInt()` or `parseFloat()` functions.
Number() function can also be used to convert a string to a number.

```js
// Convert a string to a number
let string = "123";
let number = parseInt(string);
console.log(number); // Output: 123
console.log(typeof number); // Output: "number"
console.log(parseFloat(string)); // Output: 123
console.log(Number(string)); // Output: 123

```

in JavaScript you can convert a number or string to a boolean using the `Boolean()` function. 

```js
// Convert a number or string to a boolean
let number = 123;
let string = "123";
let boolean = Boolean(number);
console.log(boolean); // Output: true
console.log(Boolean(string)); // Output: true

```


# if else statement
if else statement is used to execute different blocks of code based on a condition.

## example 
```js
let age = 25;
if(age > 18){
    console.log("You are an adult");
}
else if (age === 18){
    console.log("You are an adult but not yet an adult");
}
else{
    console.log("You are a minor");
}
```
in this example, the code inside the if block will be executed if the age is greater than 18. If the age is 18, the code inside the else if block will be executed . If the age is less than 18, the code inside the else block will be executed.

# checked property 
The `checked` property is used to get or set the checked state of a checkbox element.

## example 
```html
<!-- html  -->
<input type="checkbox" id="checkbox" checked>
```

```js
// javascript
let checkbox = document.getElementById("checkbox");
console.log(checkbox.checked); // Output: true
```


# logical operators
logical operators are used to combine multiple conditions in a conditional statement.
```js
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

```


# method chaining
method chaining is a technique where you call multiple methods on the same object in a single line of code.

```js

// Method Chaining Example

class Calculator {
  constructor(value) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this; // Return the object to enable method chaining
  }

  subtract(num) {
    this.value -= num;
    return this; // Return the object to enable method chaining
  }

  multiply(num) {
    this.value *= num;
    return this; // Return the object to enable method chaining
  }

  divide(num) {
    this.value /= num;
    return this; // Return the object to enable method chaining
  }

  result() {
    return this.value;
  }
}

// Using method chaining
const calculator = new Calculator(10);
const result = calculator.add(5).subtract(2).multiply(3).divide(1).result(); // Output: 30
console.log(result); // Output: 39

// Without method chaining
class CalculatorWithoutChaining {
  constructor(value) {
    this.value = value;
  }

  add(num) {
    this.value += num;
  }

  subtract(num) {
    this.value -= num;
  }

  multiply(num) {
    this.value *= num;
  }

  divide(num) {
    this.value /= num;
  }

  result() {
    return this.value;
  }
}

const calculatorWithoutChaining = new CalculatorWithoutChaining(10);
calculatorWithoutChaining.add(5);
calculatorWithoutChaining.subtract(2);
calculatorWithoutChaining.multiply(3);
calculatorWithoutChaining.divide(1);
const resultWithoutChaining = calculatorWithoutChaining.result();
console.log(resultWithoutChaining); // Output: 39
```



# strict equality operator
The strict equality operator (`===`) checks if the values and data types of two variables are equal.

```js
// strict equality operator 
/*
used to check if two values are equal and of the same data type.
it returns true if both values are equal and of the same data type, otherwise it returns fals
console.log(5 === 5); // true

console.log(5 === '5'); // false
// loose equality operator
used to check if two values are equal, regardless of their data type.
it returns true if both values are equal, otherwise it returns false
console.log(5 == '5'); // true
*/

// strict inequality operator example 
// if (a === b) {
//     console.log("a and b are equal");
// } else {
//     console.log("a and b are not equal");
// }

const h = document.querySelector(".strict");

const a = 2;

if(a === 2) {
    // console.log("a and 2 are equal");
    h.textContent = "number datatype and the value are matched";
} 
else if(a === "2"){
    // console.log("a and 2 are not equal");
    h.textContent = "string data type and value are matched";
}

else{
    h.textContent = "either the datatype or the values are not matched";
}
```




# ternary operator
The ternary operator is a shorthand way to write a simple if-else statement. It consists of three parts: a condition, an expression if the condition is true, and an expression if the condition is false. The general syntax is: `condition ? expressionIfTrue : expressionIfFalse` 

```js
// instead of if else
 if(age >= 18){
        notification.textContent = " You are eligible  ✔ ";
        output.append(notification);
    }
    else{
        notification.textContent = " ❌ Sorry, you are not eleigible ";
        output.append(notification);
    }

// we can use the ternary operator
 age>=18 ? console.log("You are eleigible") : console.log("Sorry, you are not eleig")

 ```




# string methods
string methods are used to perform various operations on strings such as searching, replacing, splitting, and joining strings.

```js
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


```



# string slicing
```js
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
```


# switch-case statement
The switch-case statement is used to execute different blocks of code based on the value of a variable.

```js
let a = 1;

switch(a){
    case 1:
        console.log("a is 1");
        break;
    case 2:
        console.log("a is 2");
        break;
    case 3:
        console.log("a is 3");
        break;
    default:
        console.log("a is not 1, 2 or 3");
}
```

# while loop 

The while loop is a control structure in JavaScript that allows you to execute a block of code repeatedly as long as a certain condition is true.

## Syntax
```javascript
while (condition) {
  // code to be executed
}
```
## Explanation

*   The `while` keyword is used to start the loop.
*   The `condition` is a boolean expression that is evaluated before each iteration of the loop.
*   If the condition is true, the code inside the loop is executed.
*   If the condition is false, the loop is terminated.

## Example 1: Basic While Loop
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
Output:
```
0
1
2
3
4
```
In this example, the loop will continue to execute as long as `i` is less than 5. The value of `i` is incremented by 1 in each iteration.

## Example 2: While Loop with a String Condition
```javascript
let name = "";
while (name !== "John") {
  name = prompt("Enter your name:");
}
console.log("Hello, " + name);
```
In this example, the loop will continue to execute until the user enters the name "John".

## Example 3: While Loop with a Counter
```javascript
let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}
```
Output:
```
0
1
2
3
4
5
6
7
8
9
```
In this example, the loop will execute 10 times, printing the numbers from 0 to 9.

## Example 4: While Loop with a Nested Loop
```javascript
let i = 0;
while (i < 3) {
  let j = 0;
  while (j < 3) {
    console.log(i + " " + j);
    j++;
  }
  i++;
}
```
Output:
```
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```
In this example, the outer loop will execute 3 times, and the inner loop will execute 3 times for each iteration of the outer loop.

# dowhile loop

The do-while loop is a control structure in JavaScript that allows you to execute a block of code repeatedly as long as a certain condition is true.

## Syntax
```javascript
do {
  // code to be executed
} while (condition);
```
## Explanation

*   The `do` keyword is used to start the loop.
*   The code inside the loop is executed at least once before the condition is evaluated.
*   The `while` keyword is used to specify the condition that must be true for the loop to continue.
*   If the condition is true, the loop will continue to execute.
*   If the condition is false, the loop will terminate.

## Example 1: Basic Do-While Loop
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
Output:
```
0
1
2
3
4
```
In this example, the loop will continue to execute as long as `i` is less than 5. The value of `i` is incremented by 1 in each iteration.

## Example 2: Do-While Loop with a String Condition
```javascript
let name = "";
do {
  name = prompt("Enter your name:");
} while (name !== "John");
console.log("Hello, " + name);
```
In this example, the loop will continue to execute until the user enters the name "John".

## Example 3: Do-While Loop with a Counter
```javascript
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 10);
```
Output:
```
0
1
2
3
4
5
6
7
8
9
```
In this example, the loop will execute 10 times, printing the numbers from 0 to 9.

## Example 4: Do-While Loop with a Nested Loop
```javascript
let i = 0;
do {
  let j = 0;
  do {
    console.log(i + " " + j);
    j++;
  } while (j < 3);
  i++;
} while (i < 3);
```
Output:
```
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```
In this example, the outer loop will execute 3 times, and the inner loop will execute 3 times for each iteration of the outer loop.

## Key Differences between While and Do-While Loops

*   In a while loop, the condition is evaluated before the code is executed. In a do-while loop, the code is executed at least once before the condition is evaluated.
*   A while loop may not execute at all if the condition is false. A do-while loop will always execute at least once.

When to Use Do-While Loops
---------------------------

*   Use a do-while loop when you want to ensure that the code inside the loop is executed at least once.
*   Use a do-while loop when you want to simplify your code by avoiding the need to initialize variables before the loop.
*   

# for loop

The `for` loop is a control structure in JavaScript that allows you to execute a block of code repeatedly for a specified number of iterations.

## Syntax
```javascript
for (initialization; condition; increment) {
  // code to be executed
}
```
## Explanation

*   The `for` keyword is used to start the loop.
*   The `initialization` statement is executed once before the loop starts. It is used to initialize the loop counter.
*   The `condition` statement is evaluated before each iteration of the loop. If it is true, the code inside the loop is executed.
*   The `increment` statement is executed after each iteration of the loop. It is used to update the loop counter.
*   The code inside the loop is executed repeatedly until the condition is false.

## Example 1: Basic For Loop
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
Output:
```
0
1
2
3
4
```
In this example, the loop will execute 5 times, printing the numbers from 0 to 4.

## Example 2: For Loop with a String Condition
```javascript
let name = "";
for (let i = 0; i < 3; i++) {
  name = prompt("Enter your name:");
  console.log("Hello, " + name);
}
```
In this example, the loop will execute 3 times, prompting the user to enter their name and printing a greeting message.

## Example 3: For Loop with a Counter
```javascript
for (let count = 0; count < 10; count++) {
  console.log(count);
}
```
Output:
```
0
1
2
3
4
5
6
7
8
9
```
In this example, the loop will execute 10 times, printing the numbers from 0 to 9.

## Example 4: For Loop with a Nested Loop
```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + " " + j);
  }
}
```
Output:
```
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```
In this example, the outer loop will execute 3 times, and the inner loop will execute 3 times for each iteration of the outer loop.

## Example 5: For Loop with (of Array)

```js
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number);
}

```
## Key Differences between For and While Loops

*   In a `for` loop, the initialization, condition, and increment statements are combined in a single line. In a `while` loop, these statements are separate.
*   A `for` loop is more concise and easier to read than a `while` loop.

When to Use For Loops
--------------------

*   Use a `for` loop when you need to execute a block of code for a specified number of iterations.
*   Use a `for` loop when you need to iterate over an array or an object.
*   Use a `for` loop when you need to simplify your code by combining the initialization, condition, and increment statements in a single line.
  

# number guessing game

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>number guess</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="card">
            <h1 id="heading">guess the number 1 - 100 </h1>
            <input id="guess">
            <button class="submit">Enter</button>
            <!-- <div class="output">
                <p class="output_field">output</p>
            </div> -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

```

styles
```css
body{
    background-color: black;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container{
    width: 300px;
    height: 200px;
    border: 0.2ex solid grey;
    background-color: #1c1e2e;
    border-radius: 10px;
    padding: 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#heading{
    font-size: 20px;
}

.card{
    background-color: #1c1e2e;
    border-radius: 10px;
    padding: 10px 10px;
    width: 280px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

input{
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    width: 80%;
    height: 20px;
    border: 0.1ex solid grey;
    outline: none;
    padding: 20px 20px;
    font-size: 25px;
}

.submit{
    background-color: #f1f1f1;
    padding: 10px 10px;
    margin-top: 10px;
    width:80%;
    border: 0.1ex solid rgb(0, 0, 0);
}

.output_div{
    width: 70%;
    height: auto;
    position: fixed;
    top: 20px;
    right: 20px;
    padding:0px 10px;
    border-radius: 5px;
    border: 0.1ex solid grey;
    background-color: rgb(0, 0, 0);
}

.playagain{
    background-color: #000000;
    border-radius: 10px;
    padding: 10px 10px;
    width: 280px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.playagain h4{
    color: rgb(0, 182, 76);
    font-size: 30px;    
}

.playagain_button{
    background: transparent;
    font-size: 70px;
    color: rgb(255, 255, 255);
    padding: 10px 10px;
    margin-bottom: 30px;
    width:80%;
    border: none;
    border-radius: 5px;
}

```

script
```js
// number guessing game

let user_guess = document.getElementById("guess");
const button = document.querySelector(".submit");

const container = document.querySelector(".container");
let notify = document.createElement("div");
notify.classList.add("output_div");


const minvalue = 1;
const maxvalue = 100;
const answer = Math.floor((Math.random() * maxvalue) + minvalue);

button.onclick = function(){
    notify.innerHTML = '<p class="output_field"></p>';
    container.append(notify);
    let output = document.querySelector(".output_field");
    
    let guess = user_guess.value; 
    guess = Number(guess);

    let gameover = false; 

    while(!gameover){
        if(isNaN(guess) || guess === " " ){
            output.textContent = "Please enter a number";
        }
        else if(guess < minvalue || guess > maxvalue){
            output.textContent = "Please enter a number between " + minvalue + " and " + maxvalue; // fix typo
        }
        else if(guess >= minvalue && guess <= maxvalue){
            if(guess < answer){
                output.textContent = "Too low!";
            }
            else if(guess > answer){
                output.textContent = "Too high!";
            }
            else if(guess === answer){ 
                // output.textContent = "You won!";
                // output.style.color = "green";
                container.style.display = "none";
                let playagain = document.createElement("div");
                playagain.classList.add("playagain");
                playagain.style.backgroundColor = "#1c1e2e";
                playagain.innerHTML = '<h4>You won!</h4><button class="playagain_button">↻</button>';
                document.body.appendChild(playagain);
                let play_again = document.querySelector(".playagain_button");

                play_again.onclick = function(){
                    container.style.display = "block";
                    playagain.remove();
                }
                gameover = true;
            }
        }
        user_guess.value = ""; // clear input field
        break; // exit while loop
        
    }
    setTimeout(() => {
        notify.remove();
    }, 2000);
}
```


# Array 
```js
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

```















* advanced method to generate random numbers between 1 and 10
```js
// Array of numbers from 1 to 10

let numbers = Array.from({length: 10}, (_, i) => i + 1);

console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

```


# callback 
A callback is a function passed as an argument to another function

```js
// Example of a callback function
const msg1 = document.getElementById("output1");
const msg2 = document.getElementById("output2");
const msg3 = document.getElementById("output3");

// Function that takes a callback function as an argument
function greet(name, callback){
    msg1.textContent = "Hello , " + name + " !";
    callback(name, greet3); // 
}

function greet2(name, callbac){
    msg2.textContent = "welcome , " + name + " !";
    callbac(name);
}

function greet3(name){
    msg3.textContent = "Bye, " + name + " !";
}

greet("sri", greet2);

```

# foreach 

The `forEach()` method calls a provided function once for each element in an array.

```js
// The foreach loop in JavaScript is used to iterate over the elements of an array or other iterable objects.
// It executes a block of code for each element in the array.

const msg = document.getElementById("output");

// function printNumbers(number, index, array) {
//     // console.log(`Number: ${number}, Index: ${index}, Array: ${array}`);
//     msg1.innerHTML += `Number: ${number}, Index: ${index}, Array: ${array} <br><br>`;
// }
// let a = [1, 2, 3 ,4, 5, 6 ,7 , 8, 9, 10];
// a.forEach(printNumbers);

//////////////////////////
function uppercase(item, index, array) {
    msg.textContent += `${item.toUpperCase()},  `;
    msg.innerHTML += `<br> index of ${item} is ${index} <br>, `;
}

const fruits = ["apple", "banana", "cherry"];
for(let f of fruits){
    msg.textContent += `"${f}", `;
}
msg.innerHTML += `<br><br>`;
fruits.forEach(uppercase);

// The function printNumbers takes three parameters: number, index, and array.
// The console.log function is used to print the values of the parameters to the console.
// The function is called with the numbers 1, 2, and 3, and th

// The array a is defined with the numbers 1 through 6.

// The function printNumbers is called for each element in the array a.
// The function is called with the numbers 1, 2, 3, 4, 5, and 6, and the array a. 
// The output of the program will be the values of the parameters number, index, and array for each element in the array a.
// The output will be:
//  Number: 1, Index: 0, Array: 1,2,3,4 ,5,6, 
// Number: 2, Index: 1, Array: 1, 2,3,4,5,6,
//  Number: 3, Index: 2, Array: 1,2,3,4,5,6,
//  Number: 4, Index: 3, Array: 1,2,3,4,5,6
// Number: 5, Index: 4, Array: 1,2,3, 4,5,6 
```

The `forEach()` method is used to iterate over the elements of an array. It executes a provided function once for each element in the array. The function takes three parameters: the current element, th index of the current element, and the array itself. The `forEach()` method is called on the array, and the function is called for each element in the array. The output of the program will be the values of the parameters number, index, and array for each element in the array. 
```js

// The function printNumbers takes three parameters: number, index, and array.
// The console.log function is used to print the values of the parameters to the console.
// The function is called with the numbers 1, 2, and 3, and th

// The array a is defined with the numbers 1 through 6.

// The function printNumbers is called for each element in the array a.
// The function is called with the numbers 1, 2, 3, 4, 5, and 6, and the array a. 
// The output of the program will be the values of the parameters number, index, and array for each element in the array a.
// The output will be:
//  Number: 1, Index: 0, Array: 1,2,3,4 ,5,6, 
// Number: 2, Index: 1, Array: 1, 2,3,4,5,6,
//  Number: 3, Index: 2, Array: 1,2,3,4,5,6,
//  Number: 4, Index: 3, Array: 1,2,3,4,5,6
// Number: 5, Index: 4, Array: 1,2,3, 4,5,6 

```

## example 
```js

// Example 1: Using foreach to iterate over an array
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
  console.log(num);
});

// Example 2: Using foreach with arrow function
let names = ['John', 'Alice', 'Bob'];
names.forEach(name => console.log(name));

// Example 3: Using foreach with object
let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
Object.keys(person).forEach(key => console.log(`${key}: ${person[key]}`));

// Example 4: Using foreach with array of objects
let students = [
  { name: 'John', age: 20 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 21 }
];
students.forEach(student => console.log(`Name: ${student.name}, Age: ${student.age}`));
```


# random password generator(project)
## Project Description
This project is a simple random password generator. It will generate a random password of a specified length. The password will be a combination of uppercase and lowercase letters, numbers, and special characters.
```js

let output = document.querySelector(".output");

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = false;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(num_length,uppercase,lowercase,numbers,symbols){
    let password = "";
    let allowedCharacters = "";

    if(num_length<=0){
        output.textContent = "digits cant be less than or equal to '0' ";
    }
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbersSet = "1234567890";
    const symbolsSet = "!@#$%&*()_+?";

    if (uppercase) {
        allowedCharacters += uppercaseLetters;
    }
    if (lowercase) {
        allowedCharacters += lowercaseLetters;
    }
    if (numbers) {
        allowedCharacters += numbersSet;
    }
    if (symbols) {
        allowedCharacters += symbolsSet;
    }
    for(let i = 0; i < num_length; i++){
        password += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
    }

    output.textContent = password;
}

generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
```




# spread operator
The spread operator is a feature in JavaScript that allows an iterable (such as an array or a string ) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

```js
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

```


# dice Roller (project)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice-roll</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1 id="title">Dice Roll</h1>
        <label id="label">No.of Dice :</label>
        <input type="number" id="numofdice" value="1" min="1" max="10" required>
        <button id="roll" onclick="rollDice()"> ✊🏼  🖐🏼  🎲  </button>
        <div class="output_field">
            <p id="output">
                <!-- numbers will be displayed here -->
            </p>
            <div class="images">
                <!-- images will be filled here -->
            </div>
            <p id="total"></p>
        </div>
        
    </div>
    <script src="script.js"></script>
</body>
</html>
```

```css
body{
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.container{
    background-color: rgb(0, 0, 0);
    padding:20px 20px;
    min-width: 300px;
    min-height: 200px;
    border-radius: 5px;
    border: 0.1ex solid rgb(51, 51, 51);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px 50px;
    box-shadow: 1px 1px 10px 3px rgba(54, 54, 54, 0.2);
}

#numofdice{
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    width:50%;
    height: 50px;
    border-radius: 5px;
    outline: none;
}

#label{
    font-size: 18px;
    font-weight: bold;
    padding: 8px 8px;
}

button{
    padding: 10px 50px;
    margin: 10px 20px;
    background-color: rgb(53, 104, 87);
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: larger;
    width: 80%;
}

.output_field{
    display: none;
    /* border: 0.1ex solid rgb(58, 58, 58); */
    width: 90%;
    padding: 10px 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
}

#output{
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}

.images{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

#dice{
    width: 80px;
    border-radius: 10px;
}

#total{
    font-size: 24px;
    font-weight: bold;
    color: rgb(0, 255, 191);
    text-align: center;
}

```

```js
// dice roll game

function total_(args){
    let total = 0;
    for (let arg of args){
        total += arg;
    }
    return total;
}


function rollDice(){
    random_nums = [];
    images_array = [];
    let dices = document.getElementById("numofdice").value ;
    let images = document.querySelector(".images");
    let output = document.getElementById("output");
    let output_field = document.querySelector(".output_field");


    for(let i = 1; i<=dices ; i++){
        let nums = Math.floor((Math.random() * 6) +1);
        random_nums.push(nums);
        let img_url = `<img id="dice" src="dice_images/${nums}.jpg" alt="dice1">`;
        images_array.push(img_url);
    }
    output_field.style .display = "block";
    output.textContent = random_nums.join(" - ");
    images.innerHTML = images_array.join(" ");
    let tot = total_(random_nums)
    document.getElementById("total").textContent = "Total : " + tot;
}


```

# temperature converter
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperature conversion</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Temperature converter</h2>
        <input type="number" id="textbox" value="0">
        <div class="checkers">
            <label for="celsius">
                <input type="radio" id="celsius" name="temperature" >
                <span id="check">° C - ° F</span>
            </label>
            <label for="fahren">
                <input type="radio" id="fahren" name="temperature" >
                <span id="check">° F - ° C</span>
            </label>
        </div>
        <p id="output">
            <!-- filled by js -->
        </p>
        <button id="convert" onclick="convert()">convert</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

```css
body{
    background-color: black;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 0.1ex solid rgb(0, 0, 0);
    padding: 10px 10px;
    border-radius: 10px;
    width: 300px;
    height:auto;
    background-color: rgb(66, 48, 66);
    gap: 10px;
}

h2{
    color: white;
    margin-top: 10px;
}

#textbox{
    width: 80%;
    height: 15px;
    outline: none;
    padding: 20px 15px;
    /* margin: 2px 5px; */
    background-color: black;
    color: white;
    border: 0.1ex solid rgb(59, 59, 59);
    border-radius: 5px;
    font-size: 25px;
}

.checkers{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    flex-direction: row;
    padding: 10px 10px;
}

#celsius, #fahren{
    display: none;
}

#check{
    /* border: 0.1ex solid rgb(46, 46, 46); */
    background-color: rgb(78, 78, 78);
    padding: 10px 35px;
    border-radius: 5px;
    margin: 10px 0px;
    color: grey;
}

input[type="radio"]:checked + #check{
    background-color: rgb(255, 255, 255);
    color: black;
}

#output{
    width: 100%;
    height: 100%;
    font-size: larger;
    text-align: center;
}

#convert{
    padding: 10px 30px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: rgb(0, 0, 0);
    border: none;
    box-shadow: 1px 1px 5px rgba(88, 67, 128, 0.5);
    color: #ffffff;
    font-size: 19px;
    font-weight: 600;
}

```

```js
const button = document.getElementById("convert");
const c_f = document.getElementById("celsius");
const f_c = document.getElementById("fahren");
const output = document.getElementById("output");

function convert() {
    let input = document.getElementById("textbox").value;
    if(c_f.checked){
        let result = (input * 9/5) + 32;
        output.textContent = result.toFixed(2) + "°F";
    }
    else if(f_c.checked){
        let result = (input - 32) * 5/9;
        output.textContent = result.toFixed(2) + "°C";
    }
    else{
        output.textContent = " ❗ Please select the unit"
    }
}
```

# map(), filter(), reduce()
```js
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");


// map() - returns a new array with the results of applying 
// the provided function on every element in this array.
function greet(name){
    // output1.innerHTML += name + `<br>`;
}

let users = ["sri", "kuif", "luffy", "madara"];
users.map(greet);
// greet(users)





// filter() - returns a new array with all elements that
// pass the test implemented by the provided function.
function evenify(num){
    if(num % 2 == 0){
        // output2.innerHTML += num + `<br>`;
    }
}

let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// evenify(50);
num.filter(evenify);





// reduce() - returns the accumulated result of applying 
// the provided function on every element in this array.
function sumify(previous,num){
    return previous + num;
}
// sumify(50);
let numbers = [1,2,3];
let noop = numbers.reduce(sumify, 0 );
// console.log(numbers.reduce(sumify, 0));
output3.textContent = noop ;

```

# function declaration and function expression
## function declaration
```js
// example 1
function greet(name){
    // console.log("hello ", name);
    console.log(`hello, ${name}`);
}
greet("sri through function");

// example 2
let numbers = [1,2,3,4,5,6,7,8,9];
function evennos(){
    let even = numbers.filter(num => num % 2 == 0);
    console.log(even);
}
evennos(numbers);

```

## function epression
```js
// function expression
// instead of declaring the function and calling it we can dirctly pass the function expression 
// as an argument to another function

// example 1
console.log("Function expression");

let name = function(){
    console.log("hello from function expression");
}
name("sri");

// example 2 ///////////////////////////
let all_numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// console.log(all_numbers);
function even_no(num){
    if(num %2 == 0){
        return num;
    }
}
let even_number = all_numbers.filter(even_no);
console.log(even_number);
/////////////////////////////

// instead of do this ⬆ we can do this ⬇
let even_numbers = all_numbers.filter(function(num){
    if(num %2 == 0){
        return num;
    }
})
console.log(even_numbers);

```


# Arrow function

```js
console.log("hello");

// function expression

let names =["sri","dharan","luffy","madara"];

let greet =function(name){console.log(`hello ${name}`)};

greet(names); //output : hello sri,dharan,luffy,madara
names.map(greet); 
// output
// hello sri
// hello dharan
// hello luffy
// hello madara

// instead of function expression
// we can use arrow function
// arrow function is a shorthand for function expression
// it is used to define small functions

// arrow function example

console.log("using arrow function");
let female_characters = ["nami","maki","fubuki","makima"];

let greeting = (f_name) => {console.log(`hello ${f_name}`)};
female_characters.map(greeting);
```



<<<<<<< HEAD
# Objects in JavaScript

## Introduction
---------------

In JavaScript, an object is a collection of key-value pairs, where each key is a string and each value can be any data type, including strings, numbers, booleans, arrays, and even other objects. Objects are used to store and manipulate data in a structured way.

## Creating Objects
-----------------

There are several ways to create objects in JavaScript:

### 1. Object Literal

```javascript
let person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
};
```

### 2. Object Constructor

```javascript
function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}

let person = new Person('John Doe', 30, 'Software Developer');
```

### 3. Object.create()

```javascript
let person = Object.create({
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
});
```

## Accessing Object Properties
-----------------------------

There are two ways to access object properties:

### 1. Dot Notation

```javascript
console.log(person.name); // Output: John Doe
```

### 2. Bracket Notation

```javascript
console.log(person['name']); // Output: John Doe
```

## Updating Object Properties
---------------------------

```javascript
person.name = 'Jane Doe';
console.log(person.name); // Output: Jane Doe
```

## Adding New Properties
----------------------

```javascript
person.country = 'USA';
console.log(person.country); // Output: USA
```

## Deleting Properties
---------------------

```javascript
delete person.age;
console.log(person.age); // Output: undefined
```

## Object Methods
-----------------

Objects can have methods, which are functions that belong to the object.

```javascript
let person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer',
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.occupation}.`);
  }
};

person.greet(); // Output: Hello, my name is John Doe and I am a Software Developer.
```

## Object Inheritance
---------------------

Objects can inherit properties and methods from other objects using the `Object.create()` method.

```javascript
let animal = {
  sound: function() {
    console.log('The animal makes a sound.');
  }
};

let dog = Object.create(animal);
dog.sound(); // Output: The animal makes a sound.
```

## Object Prototypes
-------------------

Every object in JavaScript has a prototype, which is an object that provides the object's properties and methods.

```javascript
let person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
};

console.log(person.__proto__); // Output: Object { ... }
```

## JSON (JavaScript Object Notation)
---------------------------------

JSON is a lightweight data interchange format that is easy to read and write.

```javascript
let person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
};

let json = JSON.stringify(person);
console.log(json); // Output: {"name":"John Doe","age":30,"occupation":"Software Developer"}

let parsedJson = JSON.parse(json);
console.log(parsedJson); // Output: { name: 'John Doe', age: 30, occupation: 'Software Developer' }
```

## Conclusion
----------

In conclusion, objects are a fundamental data structure in JavaScript that allow us to store and manipulate data in a structured way. They can have properties and methods, and can inherit properties and methods from other objects. Understanding objects is crucial for building robust and scalable JavaScript applications.

# Classes in JavaScript

## Introduction
---------------

In JavaScript, a class is a blueprint for creating objects. It defines the properties and methods of an object. Classes are a fundamental concept in object-oriented programming (OOP) and are used to create reusable code.

## Defining a Class
-----------------

A class is defined using the `class` keyword followed by the name of the class. The class definition is enclosed in curly brackets `{}`.

```javascript
class Person {
  // class definition
}
```

## Constructor
-------------

The constructor is a special method in a class that is called when an object is created from the class. It is used to initialize the properties of the object.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

## Properties
------------

Properties are the data members of a class. They are defined inside the class definition and are accessed using the dot notation.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person = new Person('John Doe', 30);
console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
```

## Methods
---------

Methods are the functions that are defined inside a class. They are used to perform actions on the object.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let person = new Person('John Doe', 30);
person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.
```

## Inheritance
-------------

Inheritance is the process of creating a new class from an existing class. The new class inherits all the properties and methods of the existing class.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log('The animal makes a sound.');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log('The dog barks.');
  }
}

let dog = new Dog('Max', 'Golden Retriever');
console.log(dog.name); // Output: Max
console.log(dog.breed); // Output: Golden Retriever
dog.sound(); // Output: The animal makes a sound.
dog.bark(); // Output: The dog barks.
```

## Super Keyword
----------------

The `super` keyword is used to access the properties and methods of the parent class.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log('The animal makes a sound.');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log('The dog barks.');
  }

  sound() {
    super.sound();
    console.log('The dog makes a sound.');
  }
}

let dog = new Dog('Max', 'Golden Retriever');
dog.sound(); // Output: The animal makes a sound. The dog makes a sound.
```

## Static Keyword
-----------------

The `static` keyword is used to define a method or property that belongs to the class itself, rather than an instance of the class.

```javascript
class Person {
  static count = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    Person.count++;
  }

  static getCount() {
    return Person.count;
  }
}

let person1 = new Person('John Doe', 30);
let person2 = new Person('Jane Doe', 25);
console.log(Person.getCount()); // Output: 2
```


# get and set method 
# Get and Set Methods in JavaScript
=====================================

In JavaScript, getter and setter methods are used to control access to an object's properties. They are also known as accessor properties.

## Get Method
-------------

The get method is used to return the value of a property. It is called when the property is accessed.

### Syntax

```javascript
get propertyName() {
  // code to be executed
}
```

### Example

```javascript
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
}

let person = new Person('John Doe', 30);
console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
```

In the above example, the `name` and `age` properties are accessed using the get method.

## Set Method
-------------

The set method is used to set the value of a property. It is called when the property is assigned a value.

### Syntax

```javascript
set propertyName(value) {
  // code to be executed
}
```

### Example

```javascript
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value >= 18) {
      this._age = value;
    } else {
      console.log('Age must be 18 or above');
    }
  }
}

let person = new Person('John Doe', 30);
person.name = 'Jane Doe';
person.age = 25;
console.log(person.name); // Output: Jane Doe
console.log(person.age); // Output: 25
```

In the above example, the `name` and `age` properties are set using the set method. The set method for `age` also includes a validation check to ensure that the age is 18 or above.

## Using Get and Set Methods Together
--------------------------------------

Get and set methods can be used together to control access to an object's properties.

### Example

```javascript
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value >= 18) {
      this._age = value;
    } else {
      console.log('Age must be 18 or above');
    }
  }
}

let person = new Person('John Doe', 30);
console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
person.name = 'Jane Doe';
person.age = 25;
console.log(person.name); // Output: Jane Doe
console.log(person.age); // Output: 25
```

In the above example, the `name` and `age` properties are accessed and set using the get and set methods.

# example 
```js
// Getters & Setters in Javascript


// class DataBase{
//     constructor(id, name, age){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }

// const student1 = new DataBase(1,"sridhar",23);

// console.log(student1.id);
// console.log(student1.name);
// console.log(student1.age);

// this will look good until we send the correct input value and type, 
// but what if we send some different inputs of different dattypes
// example like 

// const student2 = new DataBase("madara","hih", -4524574);

// console.log(student2.id);
// console.log(student2.name);
// console.log(student2.age);

// its still going to use that invalid input as value without validating the inputs
// To validate the input given to a class, we use set method 
// and to read the data from the class, we use get method


class DataBase{
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    // this set method is used to validate the id number that is 
    // passed as a parameter to the class
    set id(new_id){
        if ((new_id > 0) && (typeof new_id == "number")){
            this._id = new_id;
        }
        else{
            console.error("the id must be a positive number");
        }
    }
    
    // this get method helps the user to read the parameter 
    get id(){
        return `roll-No: ${this._id}`;
    }



    // this set method is used to validate the id number that is 
    // passed as a parameter to the class
    set name(new_name){
        if (typeof new_name == "string"){
            this._name = new_name;
        }
        else{
            console.error("the id must be a positive number");
        }
    }
    
    // this get method helps the user to read the parameter 
    get name(){
        return `student name : ${this._name}`;
    }



    // this set method is used to validate the id number that is 
    // passed as a parameter to the class
    set age(new_age){
        if ((new_age > 0) && (typeof new_age == "number")){
            this._age = new_age;
        }
        else{
            console.error("the id must be a positive number");
        }
    }
    
    // this get method helps the user to read the parameter 
    get age(){
        return `age : ${this._age}`;
    }
}

const student1 = new DataBase(2,"sridhar",23);

console.log(student1.id);
console.log(student1.name);
console.log(student1.age);


// while setting invalid parameters we will get error message 

const student2 = new DataBase(-66,70967,"hghg");

// while getting invalid parameters we will get error message (undefined)
console.log(student2.id);
console.log(student2.name);
console.log(student2.age);




```

## Benefits of Using Get and Set Methods
------------------------------------------

Using get and set methods provides several benefits, including:

*   **Encapsulation**: Get and set methods help to encapsulate an object's properties, making it harder for other parts of the code to access them directly.
*   **Validation**: Get and set methods can include validation checks to ensure that the properties are set to valid values.
*   **Flexibility**: Get and set methods can be used to perform additional actions when a property is accessed or set.

## Conclusion
----------

In conclusion, get and set methods are powerful tools in JavaScript that can be used to control access to an object's properties. They provide several benefits, including encapsulation, validation, and flexibility. By using get and set methods, developers can write more robust and maintainable code.


# Destructuring in JavaScript
=====================================

Destructuring is a feature in JavaScript that allows you to extract values from arrays or objects and assign them to variables in a concise way.

## Array Destructuring
---------------------

Array destructuring is used to extract values from an array and assign them to variables.

### Syntax

```javascript
let [variable1, variable2, ..., variableN] = array;
```

### Example

```javascript
let numbers = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4
console.log(e); // Output: 5
```

In the above example, the values of the `numbers` array are extracted and assigned to the variables `a`, `b`, `c`, `d`, and `e`.

### Skipping Values

You can skip values in the array by leaving out the corresponding variable.

```javascript
let numbers = [1, 2, 3, 4, 5];
let [a, , c, , e] = numbers;
console.log(a); // Output: 1
console.log(c); // Output: 3
console.log(e); // Output: 5
```

In the above example, the values at indices 1 and 3 are skipped.

### Assigning Default Values

You can assign default values to variables if the corresponding value in the array is `undefined`.

```javascript
let numbers = [1, 2, , 4, 5];
let [a, b, c = 3, d, e] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4
console.log(e); // Output: 5
```

In the above example, the value of `c` is assigned the default value of `3` because the corresponding value in the array is `undefined`.

### Swapping Values

You can use array destructuring to swap the values of two variables.

```javascript
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // Output: 2
console.log(b); // Output: 1
```

In the above example, the values of `a` and `b` are swapped.

## Object Destructuring
---------------------

Object destructuring is used to extract values from an object and assign them to variables.

### Syntax

```javascript
let { variable1, variable2, ..., variableN } = object;
```

### Example

```javascript
let person = { name: 'John Doe', age: 30, occupation: 'Software Developer' };
let { name, age, occupation } = person;
console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(occupation); // Output: Software Developer
```

In the above example, the values of the `person` object are extracted and assigned to the variables `name`, `age`, and `occupation`.

### Assigning Default Values

You can assign default values to variables if the corresponding property in the object is `undefined`.

```javascript
let person = { name: 'John Doe', age: 30 };
let { name, age, occupation = 'Unknown' } = person;
console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(occupation); // Output: Unknown
```

In the above example, the value of `occupation` is assigned the default value of `'Unknown'` because the corresponding property in the object is `undefined`.

### Renaming Variables

You can rename variables when using object destructuring.

```javascript
let person = { name: 'John Doe', age: 30, occupation: 'Software Developer' };
let { name: fullName, age: personAge, occupation: job } = person;
console.log(fullName); // Output: John Doe
console.log(personAge); // Output: 30
console.log(job); // Output: Software Developer
```

In the above example, the variables `name`, `age`, and `occupation` are renamed to `fullName`, `personAge`, and `job`, respectively.

### Nested Object Destructuring

You can use object destructuring to extract values from nested objects.

```javascript
let person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};
let { name, age, occupation, address: { street, city, state, zip } } = person;
console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(occupation); // Output: Software Developer
console.log(street); // Output: 123 Main St
console.log(city); // Output: Anytown
console.log(state); // Output: CA
console.log(zip); // Output: 12345
```

In the above example, the values of the `person` object and its nested `address` object are extracted and assigned to variables.

## Conclusion
----------

In conclusion, destructuring is a powerful feature in JavaScript that allows you to extract values from arrays and objects and assign them to variables in a concise way. It provides a number of benefits, including improved code readability and reduced code duplication. By using destructuring, you can write more efficient and effective code.

# Anime cards - a class project
## Html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h2>Anime characters</h2>
    </header>
    <main>
        <div class="container">
            <div class="cards_container">
                <!--  -->
            </div>
            <div class="button_container">
                <button class="create_new"> 
                    +
                </button>
            </div>

            <dialog id="dialog_box">
                <div class="dialog_container">

                    <div class="header_container">
                        <h2 class="heading">Enter character details</h2>
                        <button class="close" onclick="closing_animation()">⨉</button>
                    </div>

                    <div class="input_container">
                        <input type="text" id="name" placeholder="Name of the character">
                        <input type="text" id="power" placeholder="power of the character">
                        <input type="number" id="age" placeholder="age of the character">    
                    </div>

                    <button class="create_button">Create </button>

                </div>
            </dialog>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>

```
## styles.css
```css
body{
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

header{
    position: fixed;
    top:0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    background-color: rgb(20, 20, 20);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

header h2{
    font-size:19px;
}

main{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    /* border: 0.1ex solid rgb(0, 199, 76); */
}

.container{
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 0.1ex solid rgb(199, 0, 0); */
    min-height: 300px;
    gap: 30px;
    border-radius: 10px;
}

.cards_container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px 10px;
    gap: 30px;
    height: auto;
    /* border: 0.1ex solid rgb(248, 223, 0); */
    border-radius: inherit;
    flex-wrap: wrap;
    margin: 20px 20px;
}

.card{
    width:150px;
    height: 180px;
    position: relative;
    border: 0.1ex solid grey;
    color: white;
    border-radius: inherit;
    background-color: transparent;
    box-shadow: 10px 10px 80px 30px #030303 inset;
    display: flex;
    justify-content: center;
    gap: 0;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    /* animation: fade-in 0.2s ease-out ; */
}

.card::before{
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    z-index: -1;
    box-shadow: 10px 10px 80px 30px #3c4242 inset;
    background-color: transparent;
    backdrop-filter: blur(10px);
    border-radius: inherit;
}

.card::after{
    position: absolute;
    content: "";
    bottom: 15px;
    right: 10px;
    width: 100px;
    height: 10px;
    z-index: -2;
    animation: moving 8s ease-in-out infinite;
    background-color: rgb(255, 255, 255);
    /* border-radius: 50%; */
    clip-path:polygon(
        0% 50%,
        50% 50%,
        75% 50%,
        50% 100%,
    );
}

@keyframes moving {
    0%{
        transform: translate(-19px);
    }
    50%{
        transform: translate(0px);
    }
    100%{
        transform: translateX(-19px);
    }

}

.card h3{
    font-size: 20px;
    margin-block-start: 0em;
    margin-block-end: 0em;
}

.card p{
    font-size: 25px;
    margin-block-start: 0em;
    margin-block-end: 0em;
}

.card p:nth-child(2){
    font-size: 20px;
    margin-block-start: 0em;
    margin-block-end: 0em;
}

.button_container{
    position: fixed;
    bottom: 50px;
    right: 50px;
    background-color: rgb(255, 255, 255);
    width: auto;
    min-width: 60px;
    height: 60px;
    border-radius: 50%;
}

.create_new{
    position: relative;
    background-color: rgb(255, 255, 255);
    box-shadow: 10px 10px 30px 10px #000000;
    padding: 0px 10px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    font-size: 42px;
    font-weight: 600;
    color: rgb(0, 0, 0);
}

.create_new:hover{
    font-size: 45px;
}

@keyframes rotate {
    from{
        transform: rotate(50deg);
    }
    to{
        transform: rotate(150deg);
    }
}

.create_new:hover::after{
    opacity:1;
    animation: fade-in 0.2s ease-out;
}

/* .create_new:not(:hover)::after{
    opacity:1;
    animation: fade-out 0.3s ease-in-out;
} */

.create_new::after {
    content:"Add";
    position: absolute;
    line-height: 60px;
    width: 123px;
    height: 60px;
    bottom: 0px;
    right: 0px;
    border-radius: 28px;
    background-color: rgb(255, 255, 255);
    z-index: -1;
    font-size: 22px;
    font-weight: 800;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    opacity: 0;
    text-indent: 10px;
    animation: fade-out 0.2s ease-in;
}

@keyframes fade-in {
    from{
        transform: translate(10px) scale(0.8);
        opacity: 0;
    }
    to{
        transform: translate(0px) scale(1);
        opacity: 1;
    }
}

@keyframes fade-out {
    from{
        transform: translate(0px) scale(1);
        opacity: 1;
    }
    to{
        transform: translate(10px) scale(0.9);
        opacity: 0;
    }
}

#dialog_box{
    width: 400px;
    height: 300px;
    border-radius: 10px;
    background-color: black;
    color: white;
    border: 0.1ex solid grey;
    animation: fade-in 0.2s ease-out ;
}

#dialog_box::backdrop{
    background: transparent;
    backdrop-filter: blur(10px);
}

.dialog_container{
    width:100%;
    height: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    gap: 0px;
    /* padding: 10px 10px; */
}

.header_container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: rgb(34, 73, 60); */
    padding: 0px 10px;
    margin: 0px 0px;
    border-bottom: 0.1ex solid grey;
}

.close{
    background-color: rgb(248, 248, 248);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    font-size: 16px;
    font-weight: 900;
    color: rgb(0, 0, 0);
}

.closing_animation{
    transform: scale(0);
    opacity: 0;
    transition: all 0.3s ease-in;
}

.input_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    /* border: 0.1ex solid grey; */
    width: 100%;
    padding: 10px 0px;
    border-radius: 10px;
    height: 150px;
    margin-top: 10px;
}

.input_container input{
    width: 70%;
    height: 30px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 2px 10px;
    background-color: rgb(31, 31, 31);
}

.input_container input:focus{
    border: 1px solid white;
    color: white;

}

.create_button{
    background-color: rgb(61, 61, 61);
    padding: 5px 30px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: white;
    margin-top: 10px;
}



```

## javascript
```js
const add_new_btn = document.querySelector(".create_new");
const dialog_box = document.getElementById("dialog_box");

// add new character button function
add_new_btn.addEventListener("click", () =>{
    dialog_box.showModal();
});

// close button function
function close_dialog_box(){
    dialog_box.close();
};

let char_name_input = document.getElementById("name");
let char_power_input = document.getElementById("power");
let char_age_input = document.getElementById("age");
const create_button = document.querySelector(".create_button");

let character_cards = [];

create_button.onclick= function(){
    let char_name = char_name_input.value ;
    let char_power = char_power_input.value ;
    let char_age = char_age_input.value ;
    character_cards = JSON.parse(localStorage.getItem("character_cards"));
    const new_object = new Card_creation_class(char_name,char_age, char_power);
    localStorage.setItem("character_cards", JSON.stringify(character_cards));
    display_cards();

}



class Card_creation_class{
    constructor(char_name, char_age,char_power){
        this.c_name = char_name;
        this.c_age = char_age;
        this.c_power = char_power;
        character_cards.push({
            name:`${this.c_name}`,
            power:`${this.c_age}`,
            age:`${this.c_power}`,
        });
        // console.log(character_cards);
    }
}

function display_cards(){
    let all_cards = JSON.parse(localStorage.getItem("character_cards"));
    // console.log(all_cards[0].name);
    // console.log(all_cards[1].age);
    // console.log(all_cards[2].power);
    // for (let i=0; i<=10 ;i++){
    //     console.log(i);
    // }
    let total_len = (all_cards.length)-1;
    for (let i=0 ; i<=total_len ; i++){
        create_card(all_cards[i].name, all_cards[i].age, all_cards[i].power);
    }
}

function create_card(Name, Age, Power){
    const cards_container = document.querySelector(".cards_container");
    const new_card = document.createElement("div");
    new_card.classList.add("card");

    const add_heading = document.createElement("h3");
    add_heading.textContent = `${Name}`
    new_card.append(add_heading);

    const age = document.createElement("p");
    age.textContent = `${Age}`
    new_card.append(age);

    const power = document.createElement("p");
    power.textContent = `${Power}`
    new_card.append(power);

    cards_container.appendChild(new_card);
}

display_cards();

function closing_animation(){
    dialog_box.classList.add("closing_animation");
    setTimeout(() => {
        dialog_box.classList.remove("closing_animation");
        close_dialog_box();
    }, 250);
}




// let all_cards = [];
// class Card_creation{
//     constructor(na_me, po_wer, a_ge){
//         // all_cards= JSON.parse(localStorage.getItem("all_cards")) || [];
        
//         all_cards.push({
//             name:`${na_me}`,
//             power:`${po_wer}`,
//             age:`${a_ge}`,
//             });
//         console.log(`length of the card :${all_cards.length}`);
       
//         localStorage.setItem("all_cards", JSON.stringify(all_cards));
//         this.name= na_me;
//         this.power= po_wer;
//         this.age= a_ge;
//     }
//     display_data_cards(){
//         let total_cards = JSON.parse(localStorage.getItem("all_cards")) || [];
//         // console.log(all_cards);
//         // console.log(all_cards[0].name);
//         let data_len = total_cards.length;
//         for (let i = 0 ; i <= data_len; i++){
//             console.log(total_cards[i].name);
//             console.log(total_cards[i].age);
//             console.log(total_cards[i].power);
//         }
//     }
//     // save_copy(){
//     //     let allcards= JSON.parse(localStorage.getItem("allcards")) || [];
//     //     allcards.push({
//     //         name: `${this.name}`,
//     //         power:`${this.power}`,
//     //          age:`${this.age}`
//     //         });
//     //     localStorage.setItem("allcards", JSON.stringify(allcards));
//     // }
//     // display_copy(){
//     //     let allcards= JSON.parse(localStorage.getItem("allcards")) || [];
//     //     console.log(allcards);
//     // }

//     create_card(){
//         const cards_container = document.querySelector(".cards_container");
//         const new_card = document.createElement("div");
//         new_card.classList.add("card");

//         const add_heading = document.createElement("h3");
//         add_heading.textContent = `${this.name}`
//         new_card.append(add_heading);

//         const age = document.createElement("p");
//         age.textContent = `${this.age}`
//         new_card.append(age);

//         const power = document.createElement("p");
//         power.textContent = `${this.power}`
//         new_card.append(power);

//         cards_container.appendChild(new_card);
//     }
// }


// // let all_cards = JSON.parse(localStorage.getItem("all_cards")) || [];
// // console.log(all_cards);

// // for (let i = 0 ; i <= all_cards.length ; i++){
// //     const new_character = new Card_creation(
// //         all_cards[i].name,
// //          all_cards[i].power,
// //          all_cards[i].age);
// //          new_character.display_data_cards();
// // }

// let char_name_input = document.getElementById("name");
// let char_power_input = document.getElementById("power");
// let char_age_input = document.getElementById("age");
// const create_button = document.querySelector(".create_button");
// create_button.onclick= function(){
//     let char_name = char_name_input.value;
//     let char_power = char_power_input.value;
//     let char_age = char_age_input.value;
//     const new_character = new Card_creation(
//         char_name,
//         char_power,
//          char_age);
//     new_character.display_data_cards();
//     // new_character.save_copy();
//     // new_character.display_copy();
//     // new_character.create_card();
//     char_name_input.value = "";
//     char_power_input.value = "";
//     char_age_input.value = "";
//     close_dialog_box();
// };

// let all_cards = [];


// let some_nos = [1,2,3,4,5,6,7];
// some_nos.forEach((element)=>{
//     console.log(element);
// })


// for (let j=1; j<10 ; j++){
//     console.log(j);
// }

```






# Nested objects
```javascript
let user = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

// Accessing nested object properties
console.log(user.address.street); // Output: 123 Main St
console.log(user.address.city); // Output: Anytown

// Updating nested object properties
user.address.street = '456 Elm St';
console.log(user.address.street); // Output: 456 Elm St

// Adding new properties to a nested object
user.address.country = 'USA';
console.log(user.address.country); // Output: USA

// Deleting properties from a nested object
delete user.address.state;
console.log(user.address);

// Using object destructuring to extract nested object properties
let { street, city, state, zip } = user.address;
console.log(street); // Output: 456 Elm St
console.log(city); // Output: Anytown
console.log(state); // Output: undefined
console.log(zip); // Output: 12345

// Using the optional chaining operator (?.) to safely access nested object properties
console.log(user.address?.country); // Output: USA
console.log(user.address?.state); // Output: undefined

// Using the nullish coalescing operator (??) to provide a default value for nested object properties
console.log(user.address.street ?? 'Unknown'); // Output: 456 Elm St
console.log(user.address.state ?? 'Unknown'); // Output: Unknown
```

## example-2
```js
// Nested objects
const user_data = {
    name: "Sridharan",
    age: 23,
    address: {
        street: "123 Main St",
        city: "Chennai",
        state: "Tamil Nadu",
        zip: "600001"
    },
    skills: ["HTML", "CSS", "JS"],
    isStudent: true
};

console.log(user_data);
console.log(user_data.address);
console.log(user_data.address.city); // Chennai
console.log(user_data.skills[1]); // CSS    
console.log(user_data.isStudent); // true
console.log(user_data["name"]); // Sridharan
console.log(user_data["address"]["city"]); // Chennai
console.log(user_data["skills"][2]); // JS
```


# Array of Objects
```js
// Explanation
// ===========
// In JavaScript, an array of objects is an array that contains objects as its elements. Each object in the array can have its own properties and values.

// Example 1: Creating an array of objects
// =======================================

// Define an array of objects
let users = [
  { name: 'John Doe', age: 30, occupation: 'Software Developer' },
  { name: 'Jane Doe', age: 25, occupation: 'Data Scientist' },
  { name: 'Bob Smith', age: 40, occupation: 'Product Manager' }
];

// Accessing objects in the array
console.log(users[0]); // Output: { name: 'John Doe', age: 30, occupation: 'Software Developer' }
console.log(users[1].name); // Output: Jane Doe
console.log(users[2].occupation); // Output: Product Manager

// Example 2: Looping through an array of objects
// ===========================================

// Define an array of objects
let products = [
  { id: 1, name: 'Product A', price: 10.99 },
  { id: 2, name: 'Product B', price: 19.99 },
  { id: 3, name: 'Product C', price: 29.99 }
];

// Use a for loop to iterate over the array
for (let i = 0; i < products.length; i++) {
  console.log(`Product ${products[i].id}: ${products[i].name} - $${products[i].price}`);
}

// Example 3: Using array methods with an array of objects
// ===================================================

// Define an array of objects
let employees = [
  { id: 1, name: 'John Doe', salary: 50000 },
  { id: 2, name: 'Jane Doe', salary: 60000 },
  { id: 3, name: 'Bob Smith', salary: 70000 }
];

// Use the map() method to create a new array with employee names
let employeeNames = employees.map(employee => employee.name);
console.log(employeeNames); // Output: [ 'John Doe', 'Jane Doe', 'Bob Smith' ]

// Use the filter() method to create a new array with employees who earn more than $60000
let highSalaryEmployees = employees.filter(employee => employee.salary > 60000);
console.log(highSalaryEmployees); // Output: [ { id: 3, name: 'Bob Smith', salary: 70000 } ]

// Example 4: Using object destructuring with an array of objects
// =================================================---------

// Define an array of objects
let students = [
  { id: 1, name: 'John Doe', grade: 'A' },
  { id: 2, name: 'Jane Doe', grade: 'B' },
  { id: 3, name: 'Bob Smith', grade: 'C' }
];

// Use object destructuring to extract student names and grades
let studentInfo = students.map(({ name, grade }) => ({ name, grade }));
console.log(studentInfo); // Output: [ { name: 'John Doe', grade: 'A' }, { name: 'Jane Doe', grade: 'B' }, { name: 'Bob Smith', grade: 'C' } ]

```

## example-2
```js
// Array of objects

const student_database = [
    {
        name: "fubuki",
        age: 20,
    },
    {
        name: "Sri",
        age: 21,
    },
    {
        name: "Sukuna",
        age: 22,
    },
    {
        name: "makima",
        age: 23,
    }
];

console.log(student_database[0]);
console.log(student_database[1]);
console.log(student_database[2]);

console.log(student_database[0]["name"]);
// or 
console.log(student_database[0].name);


student_database.forEach((student) => {
    console.log(student.name);
    console.log(student.age);
});

const student_names = student_database.map(student =>student.name);
console.log(student_names);

const senior = student_database.filter((student) => {
    return student.age > 21;
});
console.log(senior);


const student_ = student_database.find((student) => {
    return student.age === 21;
});
console.log(student_);

const reduced = student_database.reduce((acc, student) => {
    return acc + student.age;
}, 0);
console.log(reduced);

```

# Sort function

```js
// The sort() method sorts the elements of an array in place and returns the array.
// The default sort order is according to the string Unicode code points.

let names = ['John', 'Alice', 'Bob', 'Eve'];
let sortedNames = names.sort();
console.log(sortedNames); // Output: ['Alice', 'Bob', 'Eve', 'John']

// If you want to sort the array in descending order, you can use the following comparison function:

let sortedNamesDesc = names.sort((a, b) => b.localeCompare(a));
console.log(sortedNamesDesc); // Output: ['John', 'Eve', 'Bob', 'Alice']

// For numerical sorting, you can use the following comparison function:

let numbers = [4, 2, 7, 1, 3];
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 7]

// For sorting arrays of objects, you can use the following comparison function:

let people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Eve', age: 35 }
];

let sortedPeople = people.sort((a, b) => a.age - b.age);
console.log(sortedPeople);
// Output:
// [
//   { name: 'Bob', age: 20 },
//   { name: 'John', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Eve', age: 35 }
// ]
```

## localecompare 
```js
// localeCompare
// The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.

const months2 = ['naruto', 'sasuke', 'sakura', 'kakashi', 'hinata'];
months2.sort((a,b)=> a.localeCompare(b));
console.log(months2); // ['hinata', 'kakashi', 'naruto', 'sakura', 'sasuke']

```

# shuffling of array

```js
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
```


# date object
```js
// date object in javascript
// Date object in javascript is used to work with dates and times. It is used to get the current date and time, set the date and time, and perform date and time calculations.

// Creating a Date object
// There are four ways to create a new Date object:
// new Date() - creates a new Date object with the current date and time
// new Date(year, month, day, hours, minutes, seconds, milliseconds) - creates a new Date object with the specified date and time
// new Date(milliseconds) - creates a new Date object with the specified number of milliseconds since January 1, 1970
// new Date(dateString) - creates a new Date object with the specified date string

const date = new Date();
console.log(date); // current date and time

const date1 = new Date(2021, 10, 10, 10, 10, 10, 10);
console.log(date1); // 2021-11-10T04:40:10.010Z

const date2 = new Date(1636489810010);
console.log(date2); // 2021-11-10T04:40:10.010Z

const date3 = new Date("2021-11-10T10:10:10.010Z");
console.log(date3); // 2021-11-10T10:10:10.010Z

// Getting the current date and time
// The Date object has several methods for getting the current date and time:
// getDate() - returns the day of the month (1-31)
// getDay() - returns the day of the week (0-6)
// getFullYear() - returns the year (four digits)
// getHours() - returns the hour (0-23)
// getMilliseconds() - returns the milliseconds (0-999)
// getMinutes() - returns the minutes (0-59)
// getMonth() - returns the month (0-11)
// getSeconds() - returns the seconds (0-59)
// getTime() - returns the number of milliseconds since January 1, 1970
// getTimezoneOffset() - returns the difference between UTC time and local time, in minutes
// getUTCDate() - returns the day of the month, according to universal time (1-31)
// getUTCDay() - returns the day of the week, according to universal time (0-6)
// getUTCFullYear() - returns the year, according to universal time (four digits)
// getUTCHours() - returns the hour, according to universal time (0-23)
// getUTCMilliseconds() - returns the milliseconds, according to universal time (0-999)
// getUTCMinutes() - returns the minutes, according to universal time (0-59)
// getUTCMonth() - returns the month, according to universal time (0-11)
// getUTCSeconds() - returns the seconds, according to universal time (0-59)

console.log(date.getDate()); // 10
console.log(date.getDay()); // 3
console.log(date.getFullYear()); // 2021
console.log(date.getHours()); // 10
console.log(date.getMilliseconds()); // 10
console.log(date.getMinutes()); // 10
console.log(date.getMonth()); // 10
console.log(date.getSeconds()); // 10
console.log(date.getTime()); // 1636489810010
console.log(date.getTimezoneOffset()); // -330
console.log(date.getUTCDate()); // 10
console.log(date.getUTCDay()); // 3
console.log(date.getUTCFullYear()); // 2021
console.log(date.getUTCHours()); // 4
console.log(date.getUTCMilliseconds()); // 10
console.log(date.getUTCMinutes()); // 40
console.log(date.getUTCMonth()); // 10
console.log(date.getUTCSeconds()); // 10

// Setting the date and time
// The Date object has several methods for setting the date and time:
// setDate() - sets the day of the month (1-31)
// setFullYear() - sets the year (four digits)
// setHours() - sets the hour (0-23)
// setMilliseconds() - sets the milliseconds (0-999)
// setMinutes() - sets the minutes (0-59)
// setMonth() - sets the month (0-11)
// setSeconds() - sets the seconds (0-59)
// setTime() - sets the number of milliseconds since January 1, 1970
// setUTCDate() - sets the day of the month, according to universal time (1-31)
// setUTCFullYear() - sets the year, according to universal time (four digits)
// setUTCHours() - sets the hour, according to universal time (0-23)
// setUTCMilliseconds() - sets the milliseconds, according to universal time (0-999)
// setUTCMinutes() - sets the minutes, according to universal time (0-59)
// setUTCMonth() - sets the month, according to universal time (0-11)
// setUTCSeconds() - sets the seconds, according to universal time (0-59)

date.setFullYear(2022);
console.log(date); // 2022-11-10T10:10:10.010Z

date.setMonth(11);
console.log(date); // 2022-12-10T10:10:10.010Z

date.setDate(20);
console.log(date); // 2022-12-20T10:10:10.010Z

date.setHours(20);
console.log(date); // 2022-12-20T20:10:10.010Z

date.setMinutes(20);
console.log(date); // 2022-12-20T20:20:10.010Z

date.setSeconds(20);
console.log(date); // 2022-12-20T20:20:20.010Z

date.setMilliseconds(20);
console.log(date); // 2022-12-20T20:20:20.020Z

date.setTime(1639982420020);
console.log(date); // 2022-12-20T20:20:20.020Z

date.setUTCFullYear(2023);
console.log(date); // 2023-12-20T20:20:20.020Z

date.setUTCMonth(11);
console.log(date); // 2023-12-20T20:20:20.020Z

date.setUTCDate(20);
console.log(date); // 2023-12-20T20:20:20.020Z

date.setUTCHours(20);
console.log(date); // 2023-12-20T20:20:20.020Z

date.setUTCMinutes(20);
console.log(date); // 2023-12-20T20:20:20.020Z

date.setUTCSeconds(20);
console.log(date); // 2023-12-20T20:20:20.020Z

date.setUTCMilliseconds(20);
console.log(date); // 2023-12-20T20:20:20.020Z

```




# Closures
```js
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

```



# setTimeout function
The `setTimeout()` function in JavaScript is a method of the Window and Worker objects that allows you to execute a block of code after a specified delay. It takes two arguments: the first is a function to be executed, and the second is the delay in milliseconds.

### Basic Example

```javascript
// Log a message to the console after 2 seconds
setTimeout(() => console.log("Hello, World!"), 2000);
```

In this example, the function `() => console.log("Hello, World!")` will be executed after 2 seconds (2000 milliseconds).

### Example with arguments

```javascript
// Function to be executed
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Call greet() with "John Doe" as an argument after 3 seconds
setTimeout(greet, 3000, "John Doe");
```

In this example, the function `greet()` will be executed after 3 seconds (3000 milliseconds), with `"John Doe"` as an argument.

### Returning a value from a setTimeout() callback

```javascript
// Function to be executed
function add(a, b) {
  return a + b;
}

// Using setTimeout() to calculate 2 + 3 after 1 second
setTimeout(() => {
  let result = add(2, 3);
  console.log(result);  // Outputs: 5 after 1 second
}, 1000);
```

In this example, the function `add()` will be called with arguments 2 and 3 after 1 second (1000 milliseconds), and the result will be logged to the console.

### Clearing a timeout

```javascript
// Setting a timeout
let timeoutId = setTimeout(() => {
  console.log("Hello, World!");
}, 2000);

// Clearing the timeout after 1 second
setTimeout(() => {
  clearTimeout(timeoutId);
}, 1000);
```

In this example, a timeout is set to log a message to the console after 2 seconds, but it's cleared after 1 second, so the message will never be logged.




# Digital clock (project)
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital clock</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="strap">
            <span class="holes"></span>
            <span class="holes"></span>
            <span class="holes"></span>
            <span class="holes"></span>
            <span class="holes"></span>
            <span class="holes"></span>
        </div>
        <div class="controller">
            <span class="lines"></span>
            <span class="lines"></span>
            <span class="lines"></span>
            <span class="lines"></span>
            <span class="lines"></span>
        </div>
        
        <div class="time_container">
            <div class="time_display">
                00:00:00
            </div>
            <!-- <div class="day">
                Monday , 12th , 2020
            </div> -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## css 
```css
body{
    background-color: black;
    color: white;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    width: 260px;
    height: 300px;
    border-radius: 80px;
    box-shadow: 0px 0px 80px 30px rgba(0, 0, 0, 0.5) ;
    position: relative;
}

.strap{
    position: absolute;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 140px;
    width: 160px;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.5) inset;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5) inset;
}

.holes{
    width: 20px;
    height: 15px;
    border-radius: 15px;
    background-color: black;
}

.controller{
    position: absolute;
    right: -15px;
    background-color: rgb(255, 255, 255);
    width: 15px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 5px;
    border-radius: 0px 10px 10px 0px;
    overflow: hidden;
}

.lines{
    width: 15px;
    height: 6px;
    background-color: rgb(151, 151, 151);
    box-shadow: 0px 0px 50px 1px rgba(80, 80, 80, 0.5);
    /* border: 0.1ex solid rgb(146, 146, 146); */
}


.time_container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 95%;
    /* background-image: url('makima-devil-chainsaw-man-3840x2160-15442.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    height: 95%;
    border-radius: 70px;
    overflow: hidden;
    box-shadow: 0px 0px 50px 10px rgba(51, 51, 51, 0.5) inset;
    background-color: black;
}

.time{
    font-size: 50px;
    color: white;
    font-family: 'Courier New', Courier, monospace;
}

.time_display{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 50px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    height: 100%;
    color: rgb(255, 255, 255);
    box-shadow: 0px 0px 90px 0px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 0px;
    margin: 0px;
    backdrop-filter: blur(1px);
}
```

## javascript
```js
document.addEventListener("DOMContentLoaded",() => {
    function update_time(){
        const display_time = document.querySelector(".time_display");
        const now = new Date();
        const Hours = now.getHours().toString().padStart(2, "0");
        const Minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const time = `${Hours}:${Minutes}:${seconds}`;
        display_time.textContent = time;
    }

    // function update_day(){
    //     const day = new Date();
    //     const today = day.getDay();
    //     const date = day.getDate();
    //     const month = day.getMonth();
    //     const year = day.getFullYear();

    //     const Day = `${date},${day},${month},${year}`;
    //     const display_day = document.querySelector(".day");
    //     display_day.textContent = today;
    // }
    
    setInterval(() => {
        update_time();
        // update_day();
    }, 1000);
})
```


# ES6 MODULES
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES6 MODULES</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <script type="module" src="script.js"></script>
</body>
</html>
```
## script module 

```js
// math.js
export const PI = 3.14159;

function add(x,y){
    return x + y;
}

function subtract(x,y){
    return x - y;
}

export {add, subtract};

```
## main script js
```js
// main script
// script.js
import {add, subtract, PI} from './math.js';

console.log(add(1,2));
console.log(subtract(8,2));
console.log(PI);
```








