// Stack class definition
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

// Example usage
let bookStack = new Stack();

// Add books to the stack
bookStack.push("The Great Gatsby");
bookStack.push("To Kill a Mockingbird");
bookStack.push("1984");

// View the top book
console.log(bookStack.peek());

// Remove the top book
console.log(bookStack.pop());

// View the top book after popping
console.log(bookStack.peek());

// Check if the stack is empty
console.log(bookStack.isEmpty());

// Print all books in the stack
console.log(bookStack.printStack());
