"use strict";

// function User(name, surname, age, isMale, email, isSubscribed) {
//   this.firstName = name;
//   this.lastName = surname;
//   this.age = age;
//   this.isMale = isMale;
//   this.email = email;
//   this.isSubscribed = isSubscribed;
// }

// const user = new User("", "", 0, true, "", true);

//////

class User {
  constructor(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static isUser(obj) {
    return obj instanceof User;
  }
  // аксеcсоры
  set age(value) {
    if (typeof value !== "number") {
      throw new TypeError("Age must be number value");
    }
    if (value < 0 || value > 130 || !Number.isInteger(value)) {
      throw new RangeError("age must be an integer value between 0 and 130");
    }

    this._age = value;
  }

  get age() {
    return this._age;
  }
}

try {
  const user = new User("Test", "Testovich", 20, true, "test@yest.com", true);
  console.log("user.getFullName() :>> ", user.getFullName());
  user.age = 30;
  console.log("user.age :>> ", user.age);
} catch (err) {
  console.log("arr :>> ", arr);
}

/////

class Phone {
  constructor(brand, model, color, price, yearRelease) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.yearRelease = yearRelease;
  }
  getAgePhone() {
    return new Date().getFullYear() - this.yearRelease;
  }

  set yearRelease(value) {
    if (typeof value !== "number") {
      throw new TypeError("Year release must be number value");
    }
    if (
      value < 1973 ||
      value > new Date().getFullYear ||
      !Number.isInteger(value)
    ) {
      throw new RangeError(
        "Year release must be an integer value between 1973 and this year"
      );
    }
    this._yearRelease = value;
  }

  get yearRelease() {
    return this._yearRelease;
  }
}

try {
  const phone = new Phone("Sumsung", "SM-G991", "Phantom Grey", 21999, 2021);
  console.log("phone.getAgePhone() :>> ", phone.getAgePhone());
} catch (err) {
  console.log("err :>> ", err);
}

/******************************************************* */

class User1 {
  constructor(name, surname, age, isMale, email, isBanned = false) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isBanned = isBanned;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User("Test", "Testovich", 27, false, "test@test.com");

class Moderator extends User1 {
  constructor(name, surname, age, isMale, email, permission) {
    super(name, surname, age, isMale, email);
    this.permission = permission;
  }
}

const moderator = new Moderator(
  "Mod",
  "Modovich",
  29,
  true,
  "mod@test.com",
  {}
);

console.log("moderator :>> ", moderator);

class Admin extends Moderator {
  constructor(name, surname, age, isMale, email, permission) {
    super(name, surname, age, isMale, email, permission);
  }
  band(user) {
    user.isBanned = true;
  }

  unbann(user) {
    user.isBanned = false;
  }
}

const admin = new Admin("Admin", "Adminovich", 54, false, "admin@test.com", {});

admin.band(moderator);
console.log("moderator :>> ", moderator);
