//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
const greaterOrEqual = numbers.filter(function (num) {
  if (num >= 25) {
    return true;
  } else {
    return false;
  }
});
console.log(greaterOrEqual);

//task1- part1(2)
const divisibleByFive = numbers.filter(function (item) {
  if (item % 5 == 0) {
    return true;
  } else {
    return false;
  }
});

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/
//const Myarray = [1, 2, 3, 4];
const squared = numbers.map(function (num) {
  return num ** 2;
});
console.log(squared);

//task2-part(4)
const multipliedBytwo = numbers.map(function (num) {
  return num * 2;
});
console.log(multipliedBytwo);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
//const newArray = [5, 10, 15, 20, 25, 30];
const greaterOrEqual20 = numbers.filter(function (num) {
  if (num >= 20) {
    return true;
  } else {
    return false;
  }
});
console.log(greaterOrEqual20);
const square = greaterOrEqual20.map(function (num) {
  return num ** 2;
});
console.log(square);

//task3-(6)
const divisiblebyfiveAndmultipledbythree = numbers
  .filter(function (item) {
    if (item % 5 == 0) {
      return true;
    } else {
      return false;
    }
  })
  .map(function (item) {
    return item * 3;
  });
console.log(divisiblebyfiveAndmultipledbythree);
//console.log(multipliedByThree);

/*const multipliedByThree = divisiblebyfive.map(function (item) {
  return item * 3;
});
console.log(multipliedByThree);*/
