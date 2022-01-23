"use strict";

const a = "global";

function f1() {
  const a = "a in f1";
  f2();
}

f1();

function f2() {
  console.log("a :>> ", a);
}

////

function counter() {
  let i = 0;

  return function () {
    return i++;
  };
}

const counter1 = counter();
console.log("counter1 :>> ", counter1());
console.log("counter1 :>> ", counter1());
console.log("counter1 :>> ", counter1());
