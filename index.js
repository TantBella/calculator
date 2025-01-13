// // alert("HEj svej");
// console.log("hello log");
// console.log("poato potato");
// console.log("123");
// // prompt("Gillar du potatis?");
// let firstName = "Bella";
// console.log(firstName);
// firstName = 23;
// console.log(firstName);
// let firstNumber = 10;
// let secondNumber = 36;
// let thirdNumber = 10.5;
// let surName = " Potatisar";
// console.log(firstNumber + secondNumber + thirdNumber + surName);
// let iAmStrong = true;
// let iAmWeak = false;
// console.log(iAmStrong);
// console.log("1" + 1 == 2);
// console.log("Jag är " + secondNumber + " år");
// let fruit = "grapes";
// console.log(fruit);
// let newFruit = fruit.toUpperCase();
// console.log(newFruit);

// let fruit = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log("uppgift 1: " + fruit);
// console.log("uppgift 2: " + fruit[2]);
// for (let i = 0; i < fruit.length; i++) {
//   const element = fruit[i];
//   console.log("uppgift 3: " + element);
// }

// let student = { name: "Bella", age: 36, city: "Bohus" };
// console.log("uppgift 5: " + student.name);

// let upperCase = function (a, b) {
//   return a.toUpperCase() + b.toUpperCase();
// };

// console.log("uppgift 6: " + upperCase("hello ", "world"));

// let countLetters = function (a) {
//   return a.length;
// };
// console.log("uppgift 7: " + countLetters("Javascript"));

function bigOrSmall() {
  let input1 = parseFloat(document.getElementById("input1").value);
  if (input1 > 10) {
    console.log("Uppgift 8: " + "Big number!");
    document.getElementById("numberIs").innerHTML = "Big number!";
  } else {
    console.log("Uppgift 8: " + "Small number!");
    document.getElementById("numberIs").innerHTML = "Small number!";
  }
}

// let numbers = [1, 2, 3, 4, 5];
// function sumTheNumbers() {
//   let sum = 0;
//   numbers.forEach((e) => (sum += e));
//   return sum;
// }
// console.log("uppgift 9: " + sumTheNumbers());

// let largeNumbers = [4, 10, 34, 8, 20];
// function largestNumber() {
//   let largest = largeNumbers[0];

//   for (let i = 0; i < largeNumbers.length; i++) {
//     if (largeNumbers[i] > largest) {
//       largest = largeNumbers[i];
//     }
//   }
//   return largest;
// }
// console.log("uppgift 10: " + largestNumber());

function evenOrOdd() {
  let input2 = parseFloat(document.getElementById("input2").value);
  if (input2 % 2 == 0) {
    console.log("Uppgift 11: " + "It is even!");
    document.getElementById("oddOrEven").innerHTML = "It is even!";
  } else {
    console.log("Uppgift 11: " + "It is odd!");
    document.getElementById("oddOrEven").innerHTML = "It is odd!";
  }
}

// let reverse = "Javascript";
// function reverseString(a) {
//   return a.split("").reverse("").join("");
// }
// console.log("Uppgift 12: " + reverseString(reverse));

// let numbers = [1, 2, 3, 4, 5];
// function multiplyTheNumbers() {
//   return numbers.map(num => num * 2);
// }
// console.log("uppgift 13: " + multiplyTheNumbers());

// let numbers = [1, 2, 3, 4, 5];
// function findOdd() {
//   return numbers.filter((num) => num % 2);
// }
// console.log("uppgift 14: " + findOdd());

// let fruits = ["apple", "banana", "cherry"];
// function fintindex(a, v) {
//   return a.indexOf(v);
// }
// console.log("uppgift 15: " + fintindex(fruits, "banana"));

// function randomNumber() {
//   return Math.floor(Math.random() * 101);
// }
// console.log("Uppgift 16: " + randomNumber());

// function logNumbers() {
//   let i = 1;
//   while (i <= 10) {
//     console.log("Uppgift 17: " + i);
//     i++;
//   }
//   return;
// }
// logNumbers();
