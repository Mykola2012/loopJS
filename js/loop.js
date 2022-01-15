//--- while ---

/*
while (<condition>) {
  // operators
}

*/

// const stepsCount = 4;
// let currentStep = 1;

// while (currentStep <= stepsCount) {
//   console.log("Steps 1");
//   console.log("Steps 2");
//   currentStep++;
// }

// const stepsCount = 4;
// let currentStep = 1;

// while (currentStep++ <= stepsCount) {
//   console.log("Steps 1");
//   console.log("Steps 2");
// }

// const pageCount = 5;
// let currentPage = 0;

// while (++currentPage <= pageCount) {
//   console.log(currentPage);
// }

// const pageCount = 5;
// let currentPage = 1;

// while (currentPage < pageCount) {
//   if (currentPage % 2 === 0) {
//     console.log(currentPage);
//   }
//   currentPage++;
// }

// const pageCount = 6;
// let currentPage = 2;

// while (currentPage <= pageCount) {
//   console.log(currentPage);
//   currentPage += 2;
// }

//--- for ---

// let pageCount = 5;

// for (let i = 1; i <= pageCount; i++) {
//   console.log(i);
// }

// const pageCount = 5;

// for (let i = pageCount; i > 0; i--) {
//   console.log(i);
// }

// let sum = 0;

// for (let i = 1; i <= 10; ++i) {
//   sum = sum + i;
//   console.log("i =", i, "sum =", sum);
// }

// let sum = 0;

// for (let i = 2; i <= 10; i += 2) {
//   sum = sum + i;
//   console.log("i =", i, "sum =", sum);
// }

// let sum = 1;

// for (let i = 1; i <= 10; ++i) {
//   sum = sum * i;
//   console.log("i =", i, "sum =", sum);
// }

// let sum = 1;

// for (let i = 5; i <= 28; i += 5) {
//   sum *= i;
//   console.log("i =", i, "sum =", sum);
// }

// do ... while

/*
do {
  (body)
} while ();
*/

/*
const expectedValue = 6;
let userValue = null;

do {
  userValue = Number(prompt("Calculate 2+2*2"));
} while (userValue !== expectedValue);

alert("You are right");
*/

/*
const numberYear = Number(prompt("Введите год от 0 до 2022"));
const numberYearEnd = Number(prompt(`Введите год от ${numberYear} до 2022`));
for (let i = numberYear; i <= numberYearEnd; i++) {
  if (i % 4 === 0) {
    console.log(`Year ${i}`);
  }
}
*/

/*

let startYear = Number(prompt("Введите год от 0 до 2022"));
let endYear = Number(prompt(`Введите год от ${startYear} до 2022`));

if (startYear > endYear) {
  const tmpStartYear = startYear;
  startYear = endYear;
  endYear = tmpStartYear;
}
let currentYear = startYear;
do {
  if (currentYear % 4 === 0) {
    console.log(`Year ${currentYear}`);
  }
  currentYear++;
} while (currentYear <= endYear);

*/

/*

for (let i = 1; i <= 10; i++) {
  console.group(`Multiplication by ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.groupEnd();
}

*/

/*
const TRY_LIMIT = 3;
const PASSWORD = "qwerty";
let currentTry = 1;
let isPasswordCorrect;

do {
  isPasswordCorrect = prompt("Imput password") === PASSWORD;
  if (isPasswordCorrect) {
    break;
  }
} while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

// if (isPasswordCorrect) {
//   console.log("Пароль верен");
// } else {
//   console.log("Пароль не верен")
// }

console.log(`Пароль ${isPasswordCorrect ? "верен" : "не верен"}`);
*/
