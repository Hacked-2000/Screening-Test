// Problem-1: Calculator Class

class Calculator {
    constructor(a, b, operation) {
      this.a = a;
      this.b = b;
      this.operation = operation.toLowerCase();
    }
  
    calculate() {
      switch(this.operation) {
        case 'addition':
          return this.a + this.b;
        case 'subtraction':
          return this.a - this.b;
        case 'multiplication':
          return this.a * this.b;
        case 'division':
          if (this.b === 0) return "Error: Division by zero";
          return this.a / this.b;
        default:
          return "Error: Invalid operation";
      }
    }
  }
  
  const calc = new Calculator(5.0, 3.0, 'Addition');
  console.log(calc.calculate());