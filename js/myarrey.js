"use strict";

function MyArrey() {
  this.length = 0;
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
  this.length = arguments.length;
}

const myArreyProto = new MyArrey();

myArreyProto.push = function (item) {
  this[this.length++] = item;
  //this.length++;
  return this.length;
};

myArreyProto.pop = function () {
  if (this.length === 0) {
    return;
  }
  const deletedElem = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return this.length;
};

myArreyProto.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

MyArrey.prototype = myArreyProto;
//----------------------------

const arr2 = new MyArrey(1, 2, 3, 4, 5);

//////
// const myArr1 = new MyArrey();
// console.log(myArr1);

// myArr1.push(1);
// console.log(myArr1);
// myArr1.push(2);
// console.log(myArr1);

// myArr1.pop();
// console.log(myArr1);

// const arr1 = new MyArrey();

// arr1.push(10);
// arr1.push(20);

// function printSquare(item, index, arr) {
//   console.log(item ** 2);
// }

// arr1.forEach(printSquare);
