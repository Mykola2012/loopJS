"use strict";
// Деструктаризация - Деструктурирующее присваивание

const user = {
  name: "Test",
  age: 23,
  email: "test@test.com",
  isMale: true,
};

f(user);
/*
function f(userObj) {
  // const name = userObj.name;
  // const age = userObj.age;

  // Деструктаризация - Деструктурирующее присваивание

  const { name, age, email } = userObj;

  console.log(
    "object :>> ",
    `User name: ${name}. He is ${age} yares old. He is email ${email}`
  );
}
*/

function f({ name: firstName, age, email }) {
  // const name = userObj.name;
  // const age = userObj.age;

  // Деструктаризация - Деструктурирующее присваивание

  // const { name, age, email } = userObj;

  console.log(
    "object :>> ",
    `User name: ${firstName}. He is ${age} yares old. He is email ${email}`
  );
}
//

const parallelepiped = {
  a: 12,
  b: 30,
  c: 55,
};

function calcVolume({ a: x, b: y, c: z }) {
  return x * y * z;
}

console.log("calcVolume(parallelepiped) :>> ", calcVolume(parallelepiped));

//

const book = {
  author: {
    firctNeme: "Test",
    lastName: "Testovich",
  },
  price: 12,
};

const {
  author: { firstName, lastName },
  price,
} = book;

//--------

const arr = [1, 2, 3, 4, 5, 6, 7];

const [zero, first, second, , , fifth] = arr;

//-------

const user1 = {
  name: "Test",
  age: 23,
  emails: ["test@test.com", "test@test.com"],
  isMale: true,
};

const {
  name,
  emailes: [emaile1, email2],
} = user1;
