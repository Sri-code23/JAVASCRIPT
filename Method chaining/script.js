
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
