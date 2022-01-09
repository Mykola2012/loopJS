// Условная конструкция и Условные операции

/*
if (<condition>) {
  <operators_true>
} else {
  <operators_false>
}

*/

const isAccsesed = false;

if (isAccsesed) {
  console.log("You had permission.");
} else {
  console.log("Accsess denied.");
}

//Условные операции
const age = 18;
console.log("age < 18", age < 18);
console.log("age > 18", age > 18);
console.log("age <= 18", age <= 18);
console.log("age >= 18", age >= 18);

console.log("age == 18", age == "18");
console.log("age === 18", age === "18");

console.log("age != 18", age != 18);
console.log("age !== 18", age !== "18");

//

// const ageUser = Number(prompt("Ваш возраст?"));

// if (ageUser >= 18) {
//   Number(prompt("Ваш номер ковид-сертификата:"));
// } else {
//   alert("Welcome");
// }

//----
// if (ageUser >= 18) {
//   Number(prompt("Ваш номер ковид-сертификата:"));
// }

// alert("Welcome");

//
// const ageUser = Number(prompt("Ваш возраст?"));
// const isVactinated = true;

// if (ageUser < 18) {
//   alert("Welcome");
// } else {
//   if (isVactinated) {
//     alert("Welcome");
//   } else {
//     alert("Go to vactination");
//   }
// }

// if (ageUser < 18) {
//   alert("Welcome");
// } else if (isVactinated) {
//   alert("Welcome");
// } else {
//   alert("Go to vactination");
// }

//--

// const number1 = Number(prompt("Первое число:"));
// const number2 = Number(prompt("Второе число:"));

// if (number1 > number2) {
//   console.log(number2);
// }

// console.log(number1);

//--- && -И---

console.log("true && true =:", true && true);
console.log("true && false =:", true && false);
console.log("false && true =:", false && true);
console.log("false && false =:", false && false);

// const userAge = Number(prompt("Ваш возраст?"));
// const isVactinated = true;

// if (userAge >= 18 && isVactinated) {
//   alert("Welcome");
// } else {
//   alert("Go to vactination");
// }

//-

// const userAge = Number(prompt("Ваш возраст?"));

// if (userAge >= 18 && userAge <= 65) {
//   console.log("Полная оплата");
// } else {
//   console.log("Льготная оплата");
// }

//--- || -ИЛИ---

console.log("true || true =:", true || true);
console.log("true || false =:", true || false);
console.log("false || true =:", false || true);
console.log("false || false =:", false || false);

// const userAge = Number(prompt("Ваш возраст?"));

// if (userAge < 14 || userAge > 65) {
//   console.log("Льготная оплата");
// } else {
//   console.log("Полная оплата");
// }

//--- ! -Логическое отрицание---

console.log("!true =:", !true);
console.log("!false =:", !false);

// const isAdult = true;

// if (!isAdult) {
//   console.log("Льготная оплата");
// } else {
//   console.log("Полная оплата");
// }

//--- switch --

// const point = Number(prompt("Point?"));

// switch (point) {
//   case 12:
//     console.log("5+");
//     break;
//   case 11:
//     console.log("5");
//     break;
//   case 10:
//     console.log("5-");
//     break;
//   default:
//     console.log("point is less then 5-");
// }

//

// const a = Number(prompt("Число 1:"));
// const b = Number(prompt("Число 2:"));
// const sign = prompt("Операция:");

// switch (sign) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   default:
//     console.log("Не коректные данные");
// }

//
// const monstNumber = 9;

// switch (monstNumber) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Winter");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Autumn");
//     break;
//   default:
//     console.log("Incrrect month number");
// }

const monstNumber = 12;

switch (true) {
  case monstNumber === 1 || monstNumber === 2 || monstNumber === 12:
    console.log("Winter");
    break;
  case monstNumber >= 3 && monstNumber <= 5:
    console.log("Spring");
    break;
  case monstNumber >= 6 && monstNumber <= 8:
    console.log("Summer");
    break;
  case monstNumber >= 9 && monstNumber <= 11:
    console.log("Autumn");
    break;
  default:
    console.log("Incrrect month number");
}

//--- ? ---
// const number1 = Number(prompt("Введите число 1"));
// const number2 = Number(prompt("Введите число 2"));
// const minNumber = number2 < number1 ? number2 : number1;

// console.log(minNumber);

//

// const access =
//   Number(prompt("Ваш возраст?")) >= 18 ? "Has access" : "Hasn't access";
// console.log(access);

//---
