// function declaration -

helloTo("Test");
helloTo("9");
helloTo("Mykola");

function helloTo(userName) {
  console.log(`Hello ${userName}!`);
}

//

const sumAB = sum(1, 2);
console.log(sumAB);

/**
 * Fuction for calculate sum of two numbers
 * @param {number} a - fist summand
 * @param {number} b - second summand
 * @returns {number} sum of a, b
 */

function sum(a, b) {
  const sumOfAB = a + b;
  return sumOfAB;
}

//

const degNum = deg(3);
console.log(degNum);

/**
 * Function exponentiante number to degree 4
 * @param {number} a - number, exponentianted to degree 4
 * @returns {number} a degree 4
 */
function deg(a) {
  // const deg4 = a ** 4;
  return a ** 4;
}

//

const sum1To10 = sum1MaxValue(10);
console.log(sum1To10);

const sum1To5 = sum1MaxValue(5);
console.log(sum1To5);

function sum1MaxValue(maxValue) {
  let sum = 0;
  for (let i = 1; i <= maxValue; i++) {
    sum += i;
  }
  return sum;
}

//

const age = 15;
console.log(checkAge(age));

function checkAge(age) {
  return age > 17;
}

// Чистая ф-я --
// 1) детерминированая ф-я.
// 2) Без побочных эфектов

//
const xY = xDegY(4, 6);
const x2 = xDegY(5);
console.log(xY);
console.log(x2);

function xDegY(x, y = 2) {
  return x ** y;
}
//

//
const productN1N2 = productNumb(5, 2);
console.log(productN1N2);

function productNumb(n2, n1 = 1) {
  let mul = 1;
  for (n1; n1 <= n2; n1++) {
    mul *= n1;
  }
  return mul;
}
//

/* Function expression
const func = fuction (){

}
*/

const add = function (a, b) {
  return a + b;
};

console.log(add(1, 10));
//

const aDegB = function (a, b) {
  return a ** b;
};

console.log(aDegB(5, 2));
