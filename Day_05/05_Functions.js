// Activity 1: Function Declaration

// Task 1:
function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    console.log(`${num} is even number`);
  } else {
    console.log(`${num} is odd number`);
  }
}

isEvenOrOdd(6);

// Task 2:
function calculateSquare(num1) {
  return num1 ** 2;
}

const result = calculateSquare(6);
console.log(result);

/* ===================== */
// Activity 2: Function Expression

// Task 3:
const findMaxNum = function (x, y) {
  const maxNum = x > y ? x : y;
  console.log(`Max number of ${x} and ${y} is: ${maxNum}`);
};

findMaxNum(8, 9);

// Task 4:
const concatenateStr = function (str1, str2) {
  return str1 + str2;
};

const res = concatenateStr("John ", "Doe");
console.log(res);

/* ===================== */
// Activity 3: Arrow Function

// Task 5:
const sumNums = (num1, num2) => num1 + num2;

const res1 = sumNums(5, 55);
console.log(res1);

// Task 6:
const checkChar = (str, char) => str.includes(char);

const res2 = checkChar("JavaScript", "i");
console.log(res2);

/* ===================== */
// Activity 4: Function Parameters and Default values

// Task 7:
function mulNum(m, n = 3) {
  return m * n;
}

const res3 = mulNum(4);
console.log(res3);

// Task 8:
function info(name, age = 22) {
  console.log(`I am ${name} and ${age} years old`);
}

info("Dave");
info("Mike", 32);

/* ===================== */
// Activity 5: High-Order Functions

// Task 9:
function repeatFunc(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

repeatFunc(() => console.log("Hi!"), 5);

// Task 10:
function applyFunctions(func1, func2, value) {
  const result1 = func1(value);
  const result2 = func2(result1);
  return result2;
}

const addTwo = (x) => x + 2;
const multiplyByTwo = (x) => x * 2;

const initialValue = 5;
const finalResult = applyFunctions(addTwo, multiplyByTwo, initialValue);

console.log(finalResult);
