//jshint esversion:6
var age = 14;

//Ternary Operators
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Above is the same as below. But you end up saving a lot of statements
/*
if (age >= 18) {
  drink = 'beer';
} else {
  drink = 'juice';
}*/

//Truthy and Falsy
//Falsy -> null, undefined, 0, '', NaN
//Truthy values -> NOT falsy values

//interestingly, if you put height = 0, variable becomes undefined even though 0 is a value.
var height = 0;
height || height === 0 ? console.log('Variable is defined') : console.log('Variable in undefined');

//Difference between == and ===
console.log("Difference between == (type coercion/implicit type conversion) and === (strict equality check)");
var width = 23;

//In the console, check the difference between 23 == '23' and 23 === '23'
if (width == '23') {
  console.log('The == operator does a type coercion OR implicit type conversion');
}

//Code Challenge 2
let johnGame1 = 89;
let johnGame2 = 120;
let johnGame3 = 103;

let johnAvg = (johnGame1 + johnGame2 + johnGame3) / 3;

let mikeGame1 = 116;
let mikeGame2 = 94;
let mikeGame3 = 123;

let mikeAvg = (mikeGame1 + mikeGame2 + mikeGame3) / 3;

let maryGame1 = 97;
let maryGame2 = 134;
let maryGame3 = 105;

let maryAvg = (maryGame1 + maryGame2 + maryGame3) / 3;

if (johnAvg > mikeAvg && johnAvg > maryAvg) {
  console.log('John\'s Team won, Avg Score was: ' + johnAvg);
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
  console.log('Mike\'s Team won, Avg Score was: ' + mikeAvg);
} else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
  console.log('Mary\'s Team won, Avg score was: ' + maryAvg);
} else if (mikeAvg === johnAvg && johnAvg === maryAvg ) {
  console.log('Match averages resulted in a draw');
} else {
  console.log('There was an error in processing your request');
}
