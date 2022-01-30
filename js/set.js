"use strict";

const s = new Set();

s.add(10);

// console.log("s.size() :>> ", s.size());

const users1 = [
  "Test",
  "Grut",
  "John Doe",
  "Grut",
  "John Doe",
  "Grut",
  "John Doe",
];
const users2 = [
  "Test",
  "Jane Doe",
  "Test",
  "Jane Doe",
  "Test",
  "Jane Doe",
  "Grut",
];

const arrOfUniqueUsers = new Set([...users1, ...users2]);
console.log("arrOfUniqueUsers :>> ", arrOfUniqueUsers);

//

const users = [
  { name: "Test0", brand: "IPhone" },
  { name: "Test1", brand: "Samsung" },
  { name: "Test2", brand: "IPhone" },
  { name: "Test3", brand: "Xiaomi" },
  { name: "Test4", brand: "Samsung" },
  { name: "Test5", brand: "Xiaomi" },
  { name: "Test6", brand: "IPhone" },
];

console.log("users :>> ", users);

// const phones = [];

// for (let v of users) {
//   phones.push(v.brand);
// }

// const uniqueBrands = [...new Set(phones)];

const phones = [];
const brandsSet = new Set();

for (let v of users) {
  brandsSet.add(v.brand);
}

const uniqueBrands = [...brandsSet];
console.log("brandsSet :>> ", brandsSet);
