//--- while ---

/*
while (<condition>) {
  // operators
}

*/

// const stepsCount = 4;
// let currentStep = 1;

// while (currentStep <= stepsCount) {
//   console.log("Steps 1");
//   console.log("Steps 2");
//   currentStep++;
// }

// const stepsCount = 4;
// let currentStep = 1;

// while (currentStep++ <= stepsCount) {
//   console.log("Steps 1");
//   console.log("Steps 2");
// }

// const pageCount = 5;
// let currentPage = 0;

// while (++currentPage <= pageCount) {
//   console.log(currentPage);
// }

// const pageCount = 5;
// let currentPage = 1;

// while (currentPage < pageCount) {
//   if (currentPage % 2 === 0) {
//     console.log(currentPage);
//   }
//   currentPage++;
// }

// const pageCount = 6;
// let currentPage = 2;

// while (currentPage <= pageCount) {
//   console.log(currentPage);
//   currentPage += 2;
// }

//--- for ---

// let pageCount = 5;

// for (let i = 1; i <= pageCount; i++) {
//   console.log(i);
// }

// const pageCount = 5;

// for (let i = pageCount; i > 0; i--) {
//   console.log(i);
// }

// let sum = 0;

// for (let i = 1; i <= 10; ++i) {
//   sum = sum + i;
//   console.log("i =", i, "sum =", sum);
// }

// let sum = 0;

// for (let i = 2; i <= 10; i += 2) {
//   sum = sum + i;
//   console.log("i =", i, "sum =", sum);
// }

// let sum = 1;

// for (let i = 1; i <= 10; ++i) {
//   sum = sum * i;
//   console.log("i =", i, "sum =", sum);
// }

let sum = 1;

for (let i = 5; i <= 28; i += 5) {
  sum *= i;
  console.log("i =", i, "sum =", sum);
}
