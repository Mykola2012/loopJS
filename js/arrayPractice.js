"use strict";

function Phone(brand, model, makeYear, color, isNfs, price) {
  this.brand = brand;
  this.model = model;
  this.makeYear = makeYear;
  this.color = color;
  this.isNfs = isNfs;
  this.price = price;
}

const phones = [];

for (let i = 0; i < 20; i++) {
  const phone = new Phone(
    Math.random() > 0.5 ? "Iphone" : "Sumsung",
    `Series ${Math.trunc(Math.random() * 20)}`,
    2015 + Math.trunc(Math.random() * 8),
    Math.random() > 0.5 ? "white" : "black",
    Math.random() > 0.5,
    3000 + Math.trunc(Math.random() * 7000)
  );
  phones.push(phone);
}

console.log("phones :>> ", phones);

//1

console.log(
  ">8000 :>> ",
  phones.filter((item) => item.price > 8000)
);

//2

console.log(
  "Color gold :>> ",
  phones.some((item) => item.color === "gold")
);

//3

console.log(
  "Year 2018 :>> ",
  phones.filter((item) => item.makeYear === 2018)
);

//4

console.log(
  "Year > 2013 :>> ",
  phones.every((item) => item.makeYear >= 2013)
);

//5

console.log(
  "Brand: model year :>> ",
  phones.forEach((item) =>
    console.log(`${item.brand}: ${item.model} ${item.makeYear}`)
  )
);

//6

const newsPhones = phones.map((item) => {
  return {
    brand: item.brand,
    model: item.model,
    color: item.color,
    isNfs: item.isNfs,
    makeYear: item.makeYear,
    price: item.price * 0.95,
  };
});

//7

console.log(
  "Nfc :>> ",
  phones.filter((item) => item.isNfs).forEach((p) => `${p.brand} ${p.model}`)
);

//8

console.log(
  "Nfs all :>> ",
  phones
    .filter((item) => item.color === "white" && item.model === "Iphone")
    .every((item) => item.isNfs)
);

//9

console.log(
  "Iphone 2016 :>> ",
  phones.filter((item) => item.brand === "Iphone" && item.makeYear === 2016)
);
