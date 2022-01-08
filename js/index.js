// 1     - a - z A - Z _ $
// 2-... - a-z A-Z _ $ 0-9
// lowerCamelCase
// UpperCamelCase

//

let userName = "Test";
userName = "Test1";
const g = 9.8;
// var a = 10; old style

//------

// String
const stringValue1 = "Test";
const stringValue2 = "Test";
const stringValue3 = `Test`;

const typeOfStringValeu = typeof stringValue1;

console.log(typeOfStringValeu);

// Number (0, 10, 5.5, -55, 5e7, -0, +0(0), +Infinity, -Infinity, NaN)
const numberValue1 = 0;
const numberVelue2 = 5.5;
const numberValue3 = -Infinity;
const numberValue4 = NaN;

console.log(typeof numberValue1);
console.log(typeof numberVelue2);
console.log(typeof numberValue3);
console.log(typeof numberValue4);

// BigInt
const bigintValue = 900719925474099145154554482888888278228n;
console.log(typeof bigintValue);

// Boolean
const booleanValue1 = true;
const booleanValue2 = false;

console.log(typeof booleanValue1);

// Symbol
const sumbolValue = Symbol();
console.log(sumbolValue);

// value undefined (typeof undefined)
let anonymusValue;
console.log(anonymusValue);
console.log(typeof anonymusValue);

// value null (typeof null( official object))
let nullValue = null;
console.log(nullValue);
console.log(typeof nullValue);

//-------
// console.log("Hello, world");
// alert("Hello, world");

// const userName1 = prompt("Imput name:");
// alert(typeof userName1);

//-------
const result1 = 1 + 1;
console.log("1 + 1 =", result1);
console.log(typeof result1);
const result2 = 1 + "555";
console.log('1 + "555" =', result2);
console.log(typeof result2);

console.log('1 + "true" =', 1 + true);
console.log('1 + "null" =', 1 + null);
console.log('1 + "undefined" =', 1 + undefined);
// console.log("1 + Symbol() =", 1 + Symbol());
console.log("1 + 125n =", 1 + Number(125n));

//------
console.log('"String" + 1 =', "string" + 1);
console.log('"String" + true =', "String" + true);
console.log('"String" + null =', "String" + null);
console.log('"String" + undefined =', "String" + undefined);
// console.log('"String" + Symbol() =', "String" + Symbol());
console.log('"String" + 125n =', "String" + 125n);

// false: false, null , undefined, 0, NaN, ''

//---
console.log("10 - 1 = ", 10 - 1);
console.log("10 * 1 = ", 10 * 1);
console.log("10 / 2 = ", 10 / 2);
console.log("11 % 2 = ", 11 % 2);

//--- Инкримент (префиксный)
let i = 1;
console.log("++i = ", ++i);
console.log("i = ", i);

//--- Инкримент (постфиксный)
i = 1;
console.log("i++ = ", i++);
console.log("i = ", i);

//---Декримент (префиксный)
i = 1;
console.log("--i = ", --i);
console.log("i = ", i);

//---Декримент (постфиксный)
i = 1;
console.log("i-- = ", i--);
console.log("i = ", i);

//---
let j = 1;
j += 2; //j = j + 2;
j *= 10; // j = j * 10;
let k = 1;
k -= 5; // j = k - 5;
console.log("k -= 5:", k);
k /= 2;
console.log("k /= -4:", k);

//---
// const number1 = Number(prompt("Imput namber1"));
// const number2 = +prompt("Imput namber2");
// alert(number1 + number2);

//---
