"use strict";

// Declare global variables.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the map method with a callback function to modify each element (e.g., multiply by 2) and log the new array.
const byTwo = numbers.map((eachNumber) => {
  const productNumber = eachNumber * 2;
  return `${eachNumber} x 2 is ${productNumber}`;
});
console.log(byTwo);

// Use the filter method with a callback to filter elements of the array (e.g., keep only even numbers).
const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});
console.log(evenNumbers);

// Utilize the forEach method to iterate over the array and perform an action for each element (e.g., log each element to the console).
numbers.forEach((item) => {
  console.log(item);
});
