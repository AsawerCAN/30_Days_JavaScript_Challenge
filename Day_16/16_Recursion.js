// Activity 1: Basic Recursion

// Task 1:
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Test cases
const testNumbers = [4, 6, 8];
testNumbers.forEach((number) => {
  console.log(`The factorial of ${number} is ${factorial(number)}`);
});

// Task 2:
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases
console.log("Fibonacci of 0:", fibonacci(0));
console.log("Fibonacci of 1:", fibonacci(1));
console.log("Fibonacci of 5:", fibonacci(5));
console.log("Fibonacci of 10:", fibonacci(10));
console.log("Fibonacci of 15:", fibonacci(15));

/* ============================= */

// Activity 2: Recursion with Arrays

// Task 3:
function sumArray(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + sumArray(arr, index + 1);
}

// Test cases
console.log("Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));
console.log("Sum of [10, 20, 30]:", sumArray([10, 20, 30]));
console.log("Sum of [5, -5, 5, -5]:", sumArray([5, -5, 5, -5]));

// Task 4:
function findMax(arr, n) {
  if (n === 1) {
    return arr[0];
  }

  return Math.max(arr[n - 1], findMax(arr, n - 1));
}

function getMax(arr) {
  return findMax(arr, arr.length);
}

console.log(getMax([1, 5, 3, 9, 2]));
console.log(getMax([-1, -5, -3, -9, -2]));
console.log(getMax([10]));

/* ============================= */

// Activity 3: String Manipulation with Recursion

// Task 5:
function reverseString(str) {
  if (str === "" || str.length === 1) {
    return str;
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

// Test cases
console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString("JavaScript"));
console.log(reverseString("12345"));

// Task 6:
function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome(""));
console.log(isPalindrome("a"));
console.log(isPalindrome("12321"));

/* ============================= */

// Activity 4: Recursive Search

// Task 7:
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  }

  return binarySearch(arr, target, mid + 1, right);
}

// Test cases
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(sortedArray, 5));
console.log(binarySearch(sortedArray, 1));
console.log(binarySearch(sortedArray, 10));
console.log(binarySearch(sortedArray, 11));

// Task 8:
function countOccurrences(arr, targetElem) {
  if (arr.length === 0) {
    return 0;
  }
  const count = arr[0] === targetElem ? 1 : 0;
  return count + countOccurrences(arr.slice(1), targetElem);
}

// Test cases
const array = [1, 2, 3, 4, 2, 2, 5, 2];

console.log(countOccurrences(array, 2));
console.log(countOccurrences(array, 3));
console.log(countOccurrences(array, 6));
console.log(countOccurrences([], 2));

/* ============================= */
console.log("============================= ");
// Activity 5: Tree Traversal (Optional)

// Task 9:
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrderTraversal(node) {
  if (node === null) return;

  inOrderTraversal(node.left);

  console.log(node.value);

  inOrderTraversal(node.right);
}

const root = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(3), new TreeNode(7)),
  new TreeNode(15, new TreeNode(12), new TreeNode(20))
);

inOrderTraversal(root);
