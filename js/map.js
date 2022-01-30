"use strict";

const user = {
  name: "Test",
};

const usersMessages = {
  [user]: ["qwerty", "Hello"],
};

// Коллекцичя по ключу,
// которая может в качестве ключа содержать любой тип

const map = new Map();

// set, get

map.set(user, ["qwerty", "Hello"]);

console.log(map.get(user));

const grut = { name: "Grut" };
map.set(grut, ["I`m Grut", "I`m Grut"]);

console.log("map.has(user) :>> ", map.has(user));

console.log("map.size :>> ", map.size);

// map.delete(user);

// map.clear;

console.log("keys :>> ", map.keys());

for (let v of map) {
  console.log("v :>> ", v);
}

const map1 = new Map([
  [user, ["hello"]],
  [grut, ["I`m Grut", "I`m Grut"]],
]);

const obj = {
  user1: "test",
  user2: "test2",
};
const map2 = new Map(Object.entries(obj));

console.log(map1.values());
console.log([...map1.values()].flat());

//

const vocabulary = new Map();
vocabulary.set("dog", "собака");

const enPhrase = "dog";

const ruPhrase = translate(enPhrase);
console.log("ruPhrase :>> ", ruPhrase);

function translate(phrase) {
  return phrase
    .split(" ")
    .map((w) => (vocabulary.has(w) ? vocabulary.get(w) : w))
    .join(" ");
}

//
