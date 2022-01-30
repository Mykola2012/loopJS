"use strict";

const user = {
  firstName: "Test",
  age: 24,
};

// for...in

for (let key in user) {
  console.log("key :>> ", key);
  console.log("value :>> ", user[key]);
}

const phone = {
  brand: "Sumsung",
  model: "SM-G930",
  price: 21999,
};

for (let key in phone) {
  console.log("key :>> ", key);
  console.log("phone[key] :>> ", phone[key]);
}

//

// Object.keys() => массив свойств
console.log("Object.keys(user) :>> ", Object.keys(user));

// Object.values() => массив значений
console.log("Object.values(user) :>> ", Object.values(user));

// Object.entries() => массив свойства - значения
console.log("Object.entries(user) :>> ", Object.entries(user));

//
//Object.keys() => массив свойств (перебераемых)
