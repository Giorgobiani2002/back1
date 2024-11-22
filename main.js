const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const positive = nums.filter((num) => num > 0).length;

const negativeSum = nums.reduce(
  (total, num) => (num < 0 ? total + num : total),
  0
);
console.log(positive);

console.log(negativeSum);

/// homework 2

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiNums2 = nums2.map((num) => num * 2);
const multiNumsDivided = multiNums2.filter((num) => num % 3 === 0);
console.log(multiNums2);
console.log(multiNumsDivided);

/// homework 3

const nums3 = [19, 5, 42, 2, 77];
const sorted = nums3.sort((a, b) => a - b);
console.log(sorted);
const smallestOne = sorted[0];
console.log(smallestOne);
const smallestTwo = sorted[1];
console.log(smallestTwo);

const numOfTwo = smallestOne + smallestTwo;
console.log(numOfTwo);

/// homework 4
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
let largerNumbers = [];

arr1.forEach((num, index) => {
  largerNumbers.push(Math.max(num, arr2[index]));
});
console.log(largerNumbers);

/// homework 5

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

const allNames = characters.map((character) => character.name);

console.log(allNames);
const eyeColor = characters.reduce((acc, character) => {
  const { eye_color } = character;
  if (!acc[eye_color]) {
    acc[eye_color] = [];
  }

  acc[eye_color].push(character);

  return acc;
}, {});

console.log(eyeColor);
