"use strict";

const s = Symbol();

const s1 = Symbol("key");

const o = {
  [s]: "qwerty",
  user: "Test",
};

const THEME = {
  LIGHT: Symbol(),
  DARK: Symbol(),
};

const theme = THEME.LIGHT;
changeTheme(theme);

function changeTheme(newTheme) {
  switch (newTheme) {
    case THEME.LIGHT:
      console.log("Light :>> ");
      break;
    case THEME.DARK:
      console.log("Dark :>> ");
      break;
  }
}
// iterable

//1--- for...of  - перебор значения если есть: (Symbol(Symbol.iterator)

// const arr = [1, 8, 3, 9, 5, 6];

// for (let value of arr) {
//   console.log("value :>> ", value);
// }

//2 Деструктаризация массивов

//3 spread-operator (...) применим как для обьектов и для итерируемых колекций
//- создание копии обьекта или итерируемых колекций
//- собирание нового обьекта из нескольких дугих
const arr = [1, 8, 3, 9, 5, 6];
console.log("...arr :>> ", ...arr);

const g = [...arr];
g[0] = 10;
console.log("g :>> ", g);
console.log("arr :>> ", arr);

const arr1 = [1, 8, 3, 9, 5, 6];

const q = [...arr, ...arr1];
console.log("q :>> ", q);
//
const user = {
  name: "Test",
  age: 25,
};

const user1 = { ...user };
//
const options = {
  url: "newURL",
};

const defaultOptions = {
  url: "defaultURL",
  port: 6000,
};

// newOptions.url = 'defaultURL';
// newOptions.port = 6000;
// newOptions.url = 'newURL';
const newOptions = { ...defaultOptions, ...options };

console.log("newOptions :>> ", newOptions);
//

// Array.from() создавать массив из итерируемого обьекта или псевдомассива
