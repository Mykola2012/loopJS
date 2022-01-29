"use strict";

function fact(n) {
  if (typeof n !== "number") {
    throw new Error("Argument must be number type");
  }

  if (n < 0 || !Number.isSafeInteger(n)) {
    throw new Error("Argument must be non negative safe int value");
  }

  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
}

// throw

try {
  const f = fact(-10);
} catch (err) {
  console.log("err :>> ", err);
}

console.log("fact(10) :>> ", fact(10));

///

function validateName(firstName) {
  if (typeof firstName !== "string") {
    throw new TypeError("Name must be a string value");
  }
  if (firstName.length < 4 || firstName.length > 32) {
    throw new Error("Length of name must be 4-32 chars");
  }

  return firstName;
}

try {
  const firstName = validateName(555);
  console.log("firstName :>> ", firstName);
} catch (err) {
  console.log("err :>> ", err);
  if (err instanceof TypeError) {
    console.log("TypeError :>> ");
  } else if (err instanceof RangeError) {
    console.log("RangeError :>> ");
  } else if (arr instanceof Error) {
    console.log(" Error:>> ");
  }
}

///

function validateAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("Argument must be number type");
  }
  if (age < 0 || age > 130) {
    throw new RangeError("Argument must be 0-130 years");
  }
  if (!Number.isInteger(age)) {
    throw new RangeError("Argument must be integer");
  }

  return age;
}

try {
  const age = validateAge(26);
  console.log("age :>> ", age);
} catch (err) {
  console.log("err :>> ", err);
  if (err instanceof TypeError) {
    console.log("Argument must be number type");
  } else if (err instanceof RangeError) {
    console.log("Argument must be integer between 0 and 130");
  } else if (arr instanceof Error) {
    console.log(" Something wunt wrong");
  }
}
