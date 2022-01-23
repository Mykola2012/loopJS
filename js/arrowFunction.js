"use strict";

function f() {
  console.log("arguments :>> ", arguments);
}

f(1, 2, 3, 4);

//

function calcSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log("object :>> ", calcSum(5, 5, 5));

//

function sumOrMultiplicity(operation) {
  let result;
  if (operation[0] === "+") {
    result = 0;
    for (let i = 1; i < arguments.length; i++) {
      result += arguments[i];
    }
  } else if (operation[0] === "*") {
    result = 1;
    for (let i = 1; i < arguments.length; i++) {
      result *= arguments[i];
    }
  }
  return result;
}

console.log("sumOrMultiplicity(+,5,5,5) :>> ", sumOrMultiplicity("+", 5, 5, 5));

// стрелочные ф-н

// function sum(a, b) {
//   return a + b
// }

const sum = (a, b) => {
  return a + b;
};

// если нужно вкрнуть только значение, то
const sum1 = (a, b) => a + b;

// Если один параметр
const square = (n) => n ** 2;

//

const isAdult = (age) => age >= 18;

console.log(isAdult(18));

//

const isEvenNumb = (num) => num % 2 === 0;

console.log(isEvenNumb(4));

//

const greetingOptions = {
  en: "Hello",
  ru: "Привет",
  ua: "Вiтаю",
};

const greeting = (lang, userName) => `${greetingOptions[lang]} ${userName}`;

console.log("greeting :>> ", greeting("en", "Test"));
console.log("greeting :>> ", greeting("ru", "Test"));
console.log("greeting :>> ", greeting("ua", "Test"));

//

// const putIntoObject = (userName, age) => {
//   return {
//     userName: userName,
//     age: age,
//   };
// };

const putIntoObject = (userName, age) => ({ userName: userName, age: age });

console.log("putIntoObject :>> ", putIntoObject("test", 22));

//-
