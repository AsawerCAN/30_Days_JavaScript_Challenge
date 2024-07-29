class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.items.length === 0) {
      return "Underflow"; // Indicates the stack is empty
    }
    return this.items.pop();
  }

  // View the top element of the stack
  peek() {
    if (this.items.length === 0) {
      return "No elements in Stack";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Print all elements in the stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str.trim();
  }
}

function reverseString(str) {
  let stack = new Stack();

  // Push all characters of the string onto the stack
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  // Pop all characters from the stack and form the reversed string
  let reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

// Example usage
let originalString = "JavaScript";
let reversedString = reverseString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);
