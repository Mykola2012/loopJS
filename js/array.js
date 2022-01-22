"use stict";

const arr = {
  0: { name: "notebook1" },
  1: { name: "notebook2" },
};

// Arrey

const arr1 = new Array();
const arr2 = [];

const arr3 = [100, 200, 300];

const arr4 = [4, 9, 5, 66, 7, 8, 9, 55, 44, 2, 669, 55];

const sumOfArr4 = sum(arr4);
console.log(sumOfArr4);

function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

////

const a1 = [1, 5, 8];
const a2 = [5, 7, 9, 8];

/*
a1[3] = a2[0];
a1[4] = a2[1];
a1[5] = a2[3];
*/

console.log(concat(a1, a2));

function concat(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1[arr1.length] = arr2[i];
  }
  return arr1;
}

// удаление / добавление э-л в массиве

// push - добавление в конец массива

const arr5 = [1, 4, 7];
arr5.push(10);
console.log(arr5);

// pop - возврат последнего + его удаление

const item = arr5.pop();
console.log(arr5);
console.log(item);
const item2 = arr5.pop();
console.log(arr5);

// unshift - добавление в начало массива

arr5.unshift(1000);
// arr5.unshift(1, 2, 3);
console.log(arr5);

// shift - возврат нулевого э-л + его удаление

const item3 = arr5.shift();
console.log(arr5);
console.log(item3);

//

const a5 = [1, 5, 8];
const a6 = [5, 7, 9, 8];

function concat(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    //arr1[arr1.length] = arr2[i];
    arr1.push(arr2[i]);
  }
  return arr1;
}

//
const arr7 = [];

function addArr(arr) {
  for (let i = 0; i < 7; i++) {
    arr.push(Number(prompt("Введите число")));
  }
}

// addArr(arr7);
console.log(arr7);

/// -- Методы массивов

console.log(Array.from("qwerty"));

//
const aa1 = [1, 2, 3];
const aa2 = [7, 8, 9, 10];

const aa3 = aa1.concat(aa2);
const aa4 = aa2.concat(aa1);

console.log(aa3);
console.log(aa4);

//

console.log(aa1.slice(1, 3));
console.log(aa1.slice(-2));

//

console.log(aa2.splice(1, 2));

//-- методы перебора массивов

const pets = ["parrot", "cat", "dog"];

// console.log(pets[i]);

const printPet = function (item, index, arr) {
  console.log(index, item, arr);
};

pets.forEach(printPet);

// --!! filter !!--

// const numbers = [1, 2, 3, 4, 8, 6, 5];

// const isOdd = function (item, index, arr) {
//   return item % 2 === 0;
// };

// const odd = numbers.filter(isOdd);
// console.log(odd);

const numbers = [-1, 2, 3, -4, 0, 8, 6, 5];

const isOdd = function (item) {
  return item >= 0;
};

const odd = numbers.filter(isOdd);
console.log(odd);

// --!! map !!--

const numbers2 = [-1, 2, -3, 4, 5, -6, 7];

const plus1 = function (i) {
  return i + 1;
};

const newNumbers = numbers2.map(plus1);
console.log(newNumbers);

// -- every => true (выполняется для всех) / false

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isPositive = function (item) {
  return item > 0;
};

console.log(numbers3.every(isPositive));

//

const users = [
  { name: "test", age: 22 },
  { name: "test2", age: 25 },
];

function isAdult(item) {
  return item.age >= 18;
}

console.log(users.every(isAdult));

// -- some  => true (выполняется хотябы для одного) / false

console.log(users.ыщьу(isAdult));
