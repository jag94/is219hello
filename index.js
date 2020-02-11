const Calculator = require('./Calculate');

a = 4;
b = 2;

sum = Calculator.sum(a,b);
product = Calculator.product(a,b);
quotient = Calculator.quotient(a,b);
difference = Calculator.difference(a,b);
square = Calculator.square(a);
sqroot = Calculator.sqroot(a);

console.log("The sum is: " + sum);
console.log("The difference is: " + difference);
console.log("The product is: " + product);
console.log("The quotient is: " + quotient);
console.log("The square is: " + square);
console.log("The square root is: " + sqroot);



