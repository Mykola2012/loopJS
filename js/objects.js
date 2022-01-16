//
const obj1 = {};
const obj2 = Object();
const obj3 = new Object();
//

const user = {
  firstName: "Test",
  lastName: "Testovich",
  email: "test@gmail.com",
  password: "qwerty",
};

console.log(user);
console.log(user.firstName);

user.email = "test1@gmail.com";

user.id = 123;

delete user.password;

//----- Ссылочные типы и типы-значения---

//Приметив (типы значения)
const a = 1;
const b = 1;
console.log(a === b);

//Объекты (Ссылочные типы)
const o1 = {};
const o2 = {};
console.log(o1 === o2);
//
//----
const car = {
  carBrand: "Lamborghini",
  carModel: "Aventador",
  carProductionYear: "2011",
  carNumber: "5PPP064",
  carColor: "Giallo Orion",
};

car.carColor = "Verde Mantis";
delete car.carProductionYear;
car.carOwnerName = "Test";
car.carOwnerLastName = "Testovich";

console.log(car);
//----
// Вычисляемое свойство
// const prop = prompt("Imput prop");
// alert(user[prop]);

const carProp = "carColor";
car[carProp] = "Giallo Orion";
///////

const user1 = {
  //Свойства
  firstName: "Test",
  lastName: "Testovich",
  email: "test@gmail.com",
  password: "qwerty",
  weight: 70,
  height: 1.75,
  //методы
  // this -- ссылка на вызывающий объект (на себя)
  // getFullName: function ()
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  getBmi() {
    return `BMI = ${this.weight / this.height ** 2}`;
  },
};

user1.getFullName();
const bmiUser1 = user1.getBmi();
console.log(bmiUser1);

const anotherUser = {
  firstName: "Ivan",
  lastName: "Ivanovich",
  getFullName: user1.getFullName,
};

console.log(anotherUser.getFullName());

//---- ф-я конструкторы

function User(firstName, lastName, age, email) {
  if (!new.target) {
    return new User(firstName, lastName, age, email);
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
  // this.isAdult = function () {
  //   return this.age >= 18;
  // };
}

const userProto = {};

userProto.isAdult = function () {
  return this.age >= 18;
};

User.prototype = userProto;

const user4 = User("Test", "Testovich", 23, "test@gmail.com");
const user5 = new User("Fedor", "Sidorovich", 16, "fedor@gmail.com");
console.log(user4);
console.log(user4.isAdult());
console.log(user5);
console.log(user5.isAdult());

//-
//
function Cat(name, weight, age, owner) {
  this.name = name;
  this.weight = weight;
  this.age = age;
  this.owner = owner;
}

const weightProto = {};

weightProto.normWeight = function () {
  if (this.weight > 5) {
    return "Fat cat!";
  } else if (this.weight >= 2) {
    return "Normal weight";
  } else if (this.age > 1) {
    return "Little weight";
  } else if (this.age <= 1) {
    return "Normal weight";
  }
};

Cat.prototype = weightProto;

const cat1 = new Cat("Oscar", 3, 5, "Ivan Ivanovich");
const cat2 = new Cat("Bob", 9, 3, "Fedor Sidorovich");
const cat3 = new Cat("Baby", 1, 1, "Test Testovich");
const cat4 = new Cat("Jack", 1.5, 2, "Nikolaj Nikolaevich");

console.log(cat1);
console.log(cat1.normWeight());
console.log(cat2);
console.log(cat2.normWeight());
console.log(cat3);
console.log(cat3.normWeight());
console.log(cat4);
console.log(cat4.normWeight());
//

// Object.create()

// В js прототипное наследование

const newCat = {
  name: "Murchik",
  owner: {
    firstName: "Test",
    lastName: "Testovich",
  },
};

//
