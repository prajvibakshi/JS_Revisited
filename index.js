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

let tipArray = [];
let totalBillArray = [];

function calculateTip(bill) {
  let tip = 0;
  let totalAmount = 0;
  if (bill < 50) {
    tip = 0.20 * bill;
    totalAmount = tip + bill;
    arrayPush(tip, totalAmount);
  } else if (bill >= 50 && bill <= 200) {
    tip = 0.15 * bill;
    totalAmount = tip + bill;
    arrayPush(tip, totalAmount);
  } else {
    tip = 0.10 * bill;
    totalAmount = tip + bill;
    arrayPush(tip, totalAmount);
  }
}

function arrayPush(tipAmt, billAmount) {
  tipArray.push(tipAmt);
  totalBillArray.push(billAmount);
}

function printArrays() {
  console.log('Initial Bills were: ' + initialBills);
  console.log('Tip Amounts were: ' + tipArray);
  console.log('Total Bills were: ' + totalBillArray);
}

let initialBills = [124, 48, 268];

calculateTip(124);
calculateTip(48);
calculateTip(268);
printArrays();

//Objects are basically key:value pairs. Can contain arrays, methods and other objects too
//Object literal
let john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Jack', 'Mary', 'Bob'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    //Below is the same as saying john.age = 2018 - john.birthYear. 'this' points to the object itself
    //Not only can 'this' get a value, but it can 'set' and define a value (seen below)
    this.age = 2018 - this.birthYear;
  }
};


console.log(john['lastName']);
console.log(john.lastName);
console.log(john.family);
console.log(john.calcAge(1990));
john.isMarried = true;
console.log(john);

let jim = new Object();
jim.firstName = 'Jim';
jim.birthYear = 1965;
jim['lastName'] = 'Jam';


/***************************
* CODING CHALLENGE 4
*/

let mark = {
  fullName: 'Mark Jones',
  mass: 75,
  height: 1.65,
  calcBMI: function() {
    //set new variable BMI //get variables mass and height
    this.bmi = this.mass/Math.pow((this.height),2);
    return this.bmi;
  }
};

let tim = {
  fullName: 'Tim Smith',
  mass: 72,
  height: 1.75,
  calcBMI: function() {
    this.bmi = this.mass/Math.pow((this.height),2);
    return this.bmi;
  }
};

if (mark.calcBMI() > tim.calcBMI()) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else if (tim.calcBMI() > mark.calcBMI()) {
  console.log(tim.fullName + ' has a higher BMI of ' + tim.bmi);
}