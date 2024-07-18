// Activity 1: Array Creation and Access

const array = [1, 2, 3, 4, 5];

// Task 1:
console.log(array);

// Task 2:
const firstElement = array[0];
const lastElement = array[array.length - 1];
console.log(`First element: ${firstElement}`);
console.log(`Last element: ${lastElement}`);

/* ==================== */
// Activity 2: Array Methods (Basic)

const arr1 = [1, 2, 3, 4, 5];

// Task 3:
const addArr1 = arr1.push(9);
console.log(arr1);

// Task 4:
const delArr1 = arr1.pop();
console.log(arr1);

// Task 5:
const shiftArr1 = arr1.shift();
console.log(arr1);

// Task 6:
const unshiftArr1 = arr1.unshift(2);
console.log(arr1);

/* ==================== */
// Activity 3: Array Methods (Intermediate)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Task 7:
const doubleNums = nums.map((num) => num * 2);
console.log(doubleNums);

console.log("|=================|");

// Task 8:
const filterNums = nums.filter((num) => num % 2 != 0);
console.log(filterNums);

console.log("|=================|");

// Task 9:
const sumNums = nums.reduce(
  (accumulator, currentVal) => accumulator + currentVal
);
console.log(sumNums);

/* ==================== */
// Activity 4: Array Iteration

const num2 = [6, 9, 10, 11, 12, 13];

console.log("|=================|");

// Task 10:
for (let i = 0; i < num2.length; i++) {
  console.log(num2[i]);
}

console.log("|=================|");

// Task 11:
num2.forEach((num) => console.log(num));

console.log("|=================|");

/* ==================== */
// Activity 5: Multi-dimensional Arrays

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

// Task 12:
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
}

console.log("|=================|");

// Task 13:
const row = 2;
const column = 3;
const element = matrix[row][column];

console.log(`Element at matrix[${row}][${column}]:`, element);
